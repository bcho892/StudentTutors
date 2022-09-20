import { ProcessStep } from "./util"

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
        steps: ProcessStep[];
    },
    sectionlast: {
        content: {
            heading: string,
            body: string,
        }
    }

}