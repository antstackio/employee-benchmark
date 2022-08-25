export const toHyphenCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

export const toTitleCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

export const hyphenToSpaceSeperatedTitle = (str: string) => {
  str.replace(/-/g, " ");
  return toTitleCase(str);
};

const colorSet = [
  {
    background: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 132)",
  },
  {
    background: "rgba(99, 255, 132, 0.2)",
    borderColor: "rgb(99, 255, 132)",
  },
  {
    background: "rgba(99, 132, 255, 0.2)",
    borderColor: "rgb(99, 132, 255)",
  },
  {
    background: "rgba(146, 84, 200, 0.2)",
    borderColor: "rgb(146, 84, 200)",
  },
  {
    background: "rgba(247, 236, 9, 0.2)",
    borderColor: "rgb(247, 236, 9)",
  },
  {
    background: "rgba(255, 99, 99, 0.2)",
    borderColor: "rgb(255, 99, 99)",
  },
  {
    background: "rgba(0, 189, 170, 0.2)",
    borderColor: "rgb(0, 189, 170)",
  },
];

export const constructDataSet = (label: string, data: any, index = 0) => {
  return {
    label,
    fill: true,
    backgroundColor: colorSet[index % 7].background,
    borderColor: colorSet[index % 7].borderColor,
    pointBackgroundColor: colorSet[index % 7].borderColor,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: colorSet[index % 7].borderColor,
    data: data,
  };
};
