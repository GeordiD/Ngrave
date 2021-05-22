import { Bar } from "./Elements/Bar";
import { Barline, BarlineTypes } from "./Elements/Barline";
import { MeasureManager } from "./MeasureManager";
import { SvgFactory} from "./SvgFactory";

export class NGrave {

    private element: HTMLElement;
    private svgRoot: SVGElement;
    private height: number;
    private width: number;

    private static SVG_NS = "http://www.w3.org/2000/svg";

    constructor (
        elementId: string,
        height: number,
        width: number
    ) {
        const element = document.getElementById(elementId);
        
        if(!element) {
            throw Error("Could not find valid element");
        } 

        this.element = element;
        this.height = height;
        this.width = width;
        this.svgRoot = this.createSvgRoot()
    }

    private createSvgRoot(): SVGElement {

        const svgRoot = SvgFactory.create("svg")
            .set({
                height: this.height,
                width: this.width,
                viewbox: `0 0 ${this.height} ${this.width}`
            })
            .appendTo(this.element);

        return svgRoot.getElement();
    }

    draw() {
        new MeasureManager(this.svgRoot, { x: 50, y: 50 }).addMeasures(4);
    }
}