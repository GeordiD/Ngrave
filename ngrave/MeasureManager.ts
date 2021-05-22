import { Bar } from "./Elements/Bar";
import { Barline, BarlineTypes } from "./Elements/Barline";
import { ElementBase } from "./Elements/ElementBase";
import { Point } from "./Utilities/Point";

export class MeasureManager {

    count = 0;
    root: SVGElement;
    start: Point;
    children: ElementBase[];

    constructor(root: SVGElement, point: Point) {
        this.root = root;
        this.start = point;
        this.children = [];
    }

    addMeasures(count: number) {
        this.count += count;
        this.clean();
        this.build();
    }  

    private clean() {
        this.children = [];
    }

    private build() {
        let pointer: Point = { x: this.start.x, y: this.start.y };
        for (let i = 0; i < this.count; i++) {
            new Barline(pointer, BarlineTypes.Single).draw(this.root);
            const bar = new Bar(pointer);
            bar.draw(this.root);
            pointer.x += bar.getLength();
        }
        new Barline(pointer, BarlineTypes.Single).draw(this.root);
    }
}