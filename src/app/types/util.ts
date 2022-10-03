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

export const cities: string[] = ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Napier-Hastings", "Dunedin", "Palmeston North", "Nelson", "Rotorua", "Whangārei", "New Plymouth", "Invercargill", "Whanganui", "Gisbourne"]

export const courses: { subject: string, NCEALevel: number, code: string }[] = [{ subject: "English", NCEALevel: 1, code: "ENGE10001" }, { subject: "English", NCEALevel: 2, code: "ENGE10002" }, { subject: "English", NCEALevel: 3, code: "ENGE10003" }, { subject: "Physics", NCEALevel: 1, code: "PHYC10001" }, { subject: "Physics", NCEALevel: 2, code: "PHYC10002" }, { subject: "Physics", NCEALevel: 3, code: "PHYC10003" }, { subject: "Chemistry", NCEALevel: 1, code: "CHEM10001" }, { subject: "Chemistry", NCEALevel: 2, code: "CHEM10002" }, { subject: "Chemistry", NCEALevel: 3, code: "CHEM10003" }, { subject: "Biology", NCEALevel: 1, code: "BIOL10001" }, { subject: "Biology", NCEALevel: 2, code: "BIOL10002" }, { subject: "Biology", NCEALevel: 3, code: "BIOL10003" }, { subject: "Calculus", NCEALevel: 1, code: "CALC10001" }, { subject: "Calculus", NCEALevel: 2, code: "CALC10002" }, { subject: "Calculus", NCEALevel: 3, code: "CALC10003" }, { subject: "Statistics", NCEALevel: 1, code: "STAT10001" }, { subject: "Statistics", NCEALevel: 2, code: "STAT10002" }, { subject: "Statistics", NCEALevel: 3, code: "STAT10003" }]