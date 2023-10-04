import { Bug } from "./bug";

export class Project {
  name!: string;
  total!: number;
  bugs!: Bug[];
  improvements!: Bug[];

}
