import { Point } from "../Utilities/Point";

export abstract class ElementBase {
    protected x;
    protected y;
    
    constructor(start: Point) {
        this.x = start.x;
        this.y = start.y;
    }

    abstract draw(svgRoot: SVGElement): void;
}