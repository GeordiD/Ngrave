
export class SvgFactory {
    private element: SVGElement;

    private constructor(element: SVGElement) {
        this.element = element;
    }

    set(params: any): SvgFactory {
        for(const key in params) {
            this.element.setAttribute(key, typeof params[key] === 'string' ? params[key] : params[key].toString());
        }
        return this;
    }

    getElement(): SVGElement {
        return this.element;
    }

    appendTo(parentElement: HTMLElement | SVGElement): SvgFactory {
        parentElement.appendChild(this.element);
        return this;
    }

    static create(type: string): SvgFactory {
        return new SvgFactory(document.createElementNS("http://www.w3.org/2000/svg", type));
    }
}