import { SvgFactory } from "../SvgFactory";
import { Point } from "../Utilities/Point";
import { ElementBase } from "./ElementBase";

export enum BarlineTypes {
    Single,
    Double
}

export class Barline extends ElementBase {
    type: BarlineTypes;

    constructor(start: Point, type: BarlineTypes) {
        super(start);
        this.type = type;
    }

    draw(svgRoot: SVGElement): void {
        switch (this.type) {
            case BarlineTypes.Single:
                this.drawSingle(svgRoot);
                return;
            case BarlineTypes.Double:
                throw new Error("Double Barline not supported yet");
                return;
        }
    }

    private drawSingle(svgRoot: SVGElement) {
        SvgFactory.create("rect")
            .set({
                x: this.x,
                y: this.y,
                height: 48,
                width: 1.5,
                fill: "#000"
            })
            .appendTo(svgRoot);
    }
}