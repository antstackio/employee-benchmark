interface IMeta {
  description: string;
}
interface ILevels {
  level: number;
  title: string;
}
interface IEmployeeMetrics {
  levels: ILevels[];
  levelsMeta: Record<ILevels["title"], IMeta>;
}

export enum axes {
  TECHNOLOGY = "Technology",
  SYSTEM = "System",
  PEOPLE = "People",
  PROCESS = "Process",
  INFLUENCE = "Influence",
}

export const axesMeta: Record<axes, IMeta> = {
  [axes.TECHNOLOGY]: {
    description: "knowledge of the tech stack and tools",
  },
  [axes.SYSTEM]: {
    description: "level of ownership of the system(s)",
  },
  [axes.PEOPLE]: {
    description: "relationship with the team(s)",
  },
  [axes.PROCESS]: {
    description: "level of engagement with the development process",
  },
  [axes.INFLUENCE]: {
    description: "scope of influence of the position",
  },
};

export const technologyLevels: ILevels[] = [
  {
    level: 1,
    title: "Adopts",
  },
  {
    level: 2,
    title: "Specializes",
  },
  {
    level: 3,
    title: "Evangelizes",
  },
  {
    level: 4,
    title: "Masters",
  },
  {
    level: 5,
    title: "Creates",
  },
];
export const technologyLevelsMeta: Record<ILevels["title"], IMeta> = {
  [technologyLevels[0].title]: {
    description:
      "actively learns and adopts the technology and tools defined by the team",
  },
  [technologyLevels[1].title]: {
    description:
      "is the go-to person for one or more technologies and takes initiative to learn new ones",
  },
  [technologyLevels[2].title]: {
    description:
      "researches, creates proofs of concept and introduces new technologies to the team",
  },
  [technologyLevels[3].title]: {
    description:
      "has very deep knowledge about the whole technology stack of the system",
  },
  [technologyLevels[4].title]: {
    description:
      "designs and creates new technologies that are widely used either by internal or external teams",
  },
};

export const systemLevels: ILevels[] = [
  {
    level: 1,
    title: "Enhances",
  },
  {
    level: 2,
    title: "Designs",
  },
  {
    level: 3,
    title: "Owns",
  },
  {
    level: 4,
    title: "Evolves",
  },
  {
    level: 5,
    title: "Leads",
  },
];

export const systemLevelsMeta: Record<ILevels["title"], IMeta> = {
  [systemLevels[0].title]: {
    description:
      "successfully pushes new features and bug fixes to improve and extend the system",
  },
  [systemLevels[1].title]: {
    description:
      "designs and implements medium to large size features while reducing the system’s tech debt",
  },
  [systemLevels[2].title]: {
    description:
      "owns the production operation and monitoring of the system and is aware of its SLAs",
  },
  [systemLevels[3].title]: {
    description:
      "evolves the architecture to support future requirements and defines its SLAs",
  },
  [systemLevels[4].title]: {
    description:
      "leads the technical excellence of the system and creates plans to mitigate outages",
  },
};

export const peopleLevels: ILevels[] = [
  {
    level: 1,
    title: "Learns",
  },
  {
    level: 2,
    title: "Supports",
  },
  {
    level: 3,
    title: "Mentors",
  },
  {
    level: 4,
    title: "Coordinates",
  },
  {
    level: 5,
    title: "Manages",
  },
];

export const processLevels: ILevels[] = [
  {
    level: 1,
    title: "Follows",
  },
  {
    level: 2,
    title: "Enforces",
  },
  {
    level: 3,
    title: "Challenges",
  },
  {
    level: 4,
    title: "Adjusts",
  },
  {
    level: 5,
    title: "Defines",
  },
];

export const influenceLevels: ILevels[] = [
  {
    level: 1,
    title: "Subsystem",
  },
  {
    level: 2,
    title: "Team",
  },
  {
    level: 3,
    title: "Multiple Teams",
  },
  {
    level: 4,
    title: "Company",
  },
  {
    level: 5,
    title: "Community",
  },
];

export const peopleLevelsMeta: Record<ILevels["title"], IMeta> = {
  [peopleLevels[0].title]: {
    description:
      "quickly learns from others and consistently steps up when it is required",
  },
  [peopleLevels[1].title]: {
    description:
      "proactively supports other team members and helps them to be successful",
  },
  [peopleLevels[2].title]: {
    description:
      "mentors others to accelerate their career-growth and encourages them to participate",
  },
  [peopleLevels[3].title]: {
    description:
      "coordinates team members providing effective feedback and moderating discussions",
  },
  [peopleLevels[4].title]: {
    description:
      "manages the team members’ career, expectations, performance and level of happiness",
  },
};

export const processLevelsMeta: Record<ILevels["title"], IMeta> = {
  [processLevels[0].title]: {
    description:
      "follows the team processes, delivering a consistent flow of features to production",
  },
  [processLevels[1].title]: {
    description:
      "enforces the team processes, making sure everybody understands the benefits and tradeoffs",
  },
  [processLevels[2].title]: {
    description:
      "challenges the team processes, looking for ways to improve them",
  },
  [processLevels[3].title]: {
    description:
      "adjusts the team processes, listening to feedback and guiding the team through the changes",
  },
  [processLevels[4].title]: {
    description:
      "defines the right processes for the team’s maturity level, balancing agility and discipline",
  },
};

export const influenceLevelsMeta: Record<ILevels["title"], IMeta> = {
  [influenceLevels[0].title]: {
    description: "makes an impact on one or more subsystems",
  },
  [influenceLevels[1].title]: {
    description:
      "makes an impact on the whole team, not just on specific parts of it",
  },
  [influenceLevels[2].title]: {
    description:
      "makes an impact not only his/her team but also on other teams",
  },
  [influenceLevels[3].title]: {
    description: "makes an impact on the whole tech organization",
  },
  [influenceLevels[4].title]: {
    description: "makes an impact on the tech community",
  },
};

export const employeeMetrics: Record<axes, IEmployeeMetrics> = {
  [axes.TECHNOLOGY]: {
    levels: technologyLevels,
    levelsMeta: technologyLevelsMeta,
  },
  [axes.SYSTEM]: {
    levels: systemLevels,
    levelsMeta: systemLevelsMeta,
  },
  [axes.PEOPLE]: {
    levels: peopleLevels,
    levelsMeta: peopleLevelsMeta,
  },
  [axes.PROCESS]: {
    levels: processLevels,
    levelsMeta: processLevelsMeta,
  },
  [axes.INFLUENCE]: {
    levels: influenceLevels,
    levelsMeta: influenceLevelsMeta,
  },
};
