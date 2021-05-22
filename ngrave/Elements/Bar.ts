import { SvgFactory } from "../SvgFactory";
import { Point } from "../Utilities/Point";
import { ElementBase } from "./ElementBase";

export class Bar extends ElementBase {

    private length: number;

    private static STAFF_LINE_WIDTH = 1.5;
    private static STAFF_LINE_FILL = "#000";
    private static DEFAULT_BAR_LENGTH = 250;

    constructor(start: Point, length?: number) {
        super(start);
        this.length = length ?? Bar.DEFAULT_BAR_LENGTH;
    }

    draw(svgRoot: SVGElement) {
        for(let i = 0; i < 5; i++) {
            SvgFactory.create("rect")
                .set({
                    x: this.x,
                    y: this.y + i*12,
                    width: this.length,
                    height: Bar.STAFF_LINE_WIDTH,
                    fill: Bar.STAFF_LINE_FILL
                })
                .appendTo(svgRoot);
        }

        SvgFactory.create("rect")
            .set({
                x: this.x,
                y: this.y,
                width: this.length,
                height: 4*12,
                "fill-opacity": 0
            })
            .set({
                "onmouseover": "console.log('hello')"
            })
            .appendTo(svgRoot);
    }
    
    getLength(): number {
        return this.length;
    }
}