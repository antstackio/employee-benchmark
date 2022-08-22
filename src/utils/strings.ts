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

export const constructDataSet = (label: string, data: any) => {
  return [
    {
      label,
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      fill: true,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: data,
    },
  ];
};
