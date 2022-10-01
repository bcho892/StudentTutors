import { ProcessStep } from "./util"

export type Pages = {
    homepage: Homepage,
    aboutpage: Aboutpage,
    contactpage: Contactpage,
    tutorpage: Tutorpage,
    resourcepage: Resourcepage,
    bookpage: Bookpage
}

export type Homepage = {
    landingtext: string,
    landingimage: Image,
    sectionone: {
        heading: string,
        firsthalf: {
            heading: string,
            secondaryheading: string,
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
            image: Image,
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

export type Tutorpage = {
    heading: string,
    body: string
}

export type Resourcepage = {
    heading: string,
    body: string
}

export type Contactpage = {
    sectionone: {
        heading: string,
        body: string,
    },
    sectiontwo: {
        heading: string,
        body: string
    }
}

export type Bookpage = {
    heading: string,
    body: string,
}

export type Goal = {
    name: string,
    description: string;
}

export type Resource = {
    name: string,
    description: string,
    link: string
}

export type Image = {
    asset: {
        _ref: string;
    }
}

export type DisplaySubject = {
    name: string,
    image: Image,
}