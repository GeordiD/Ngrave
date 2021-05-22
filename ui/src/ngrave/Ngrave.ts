import { setBlockTracking } from "@vue/runtime-core";
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
                hieght: this.height,
                width: this.width,
                viewbox: `0 0 ${this.height} ${this.width}`
            })
            .appendTo(this.element);

        return svgRoot.getElement();
    }

    draw() {

        for(let i = 0; i < 5; i++) {
            SvgFactory.create("rect")
            .set({
                x: 50,
                y: 50 + i*12,
                width: 300,
                height: 1.5,
                fill: "#000"
            })
            .appendTo(this.svgRoot);
        }
        
    }
}