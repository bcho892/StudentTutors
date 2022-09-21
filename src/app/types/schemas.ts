import { ProcessStep } from "./util"

export type Pages = {
    homepage: Homepage,
    aboutpage: Aboutpage,
}

export type Homepage = {
    landingtext: string,
    sectionone: {
        heading: string,
        firsthalf: {
            heading: string,
            body: string,
        },
        secondhalf: {
            heading: string,
            icons: string[],
        }
    },
    sectiontwo: {
        heading: string,
        firsthalf: {
            image: string,
        },
        secondhalf: {
            title: string,
            body: string,
        }
    },
    sectionthree: {
        steps: ProcessStep[],
    },
    sectionlast: {
        content: {
            heading: string,
            body: string,
        }
    }

}

export type Aboutpage = {
    abouttext: string,
    goalsdescription: string,
    sectionpromoter: {
        heading: string,
        body: string,
        name: string,
        credidentials: string,
    }

}

export type Goal = {
    name: string,
    description: string;
}