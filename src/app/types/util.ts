import { Image } from "./schemas";

export type ProcessStep = {
    step: number,
    name: string,
    icon: Image,
    description: string
}

export type LinkItem = {
    name: string;
    link: string;
}


export type Subject = {
    name: string;
    color: string;
}

export type Tutor = {
    name: string;
    image: string;
    description: string;
    subjects: Subject[];

}
export type ResourceItem = {
    title: string;
    image: string;
    description: string;
    link: string;
}

