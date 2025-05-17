import { Link } from "./link.class";

export class Image extends Link {
    height: number;
    width: number;

    constructor(name: string, url: string, height: number, width: number) {
        super(name, url);
        this.height = height;
        this.width = width;
    }
}