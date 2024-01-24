/*
 * Copyright (C) 2023 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default class ReshapeInterceptor {

    interceptEditor(editor) {
        editor.viewModel.sketchViewModel.on("update", event => {
            try {
                this._onMove(event);
            }
            catch(e){
                // catch errors to avoid interruptions and freezes caused by undefined attributes
            }
        });
    }

    _onMove(event) {
        if (event.tool === "reshape") {
            const graphics = event.graphics;
            const centerGraphic = graphics[0];

            // If the edge graphic is moving, keep the center graphic
            // at its initial location. Only move edge graphic to resize the buffer.
            if (event.toolEventInfo && event.toolEventInfo.mover.geometry.type !== "point") {
                const toolType = event.toolEventInfo.type;
                // keep the center graphic at its initial location when edge point is moving
                if (toolType === "move-start") {
                    this.centerGeometryAtStart = centerGraphic.geometry;
                }
                if (toolType === "move" || toolType === "move-stop") {
                    if (this.centerGeometryAtStart) {
                        centerGraphic.geometry = this.centerGeometryAtStart;
                    }
                }
            }
        }
    }
}
