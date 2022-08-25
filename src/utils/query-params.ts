import { axes } from "../definitions/employee-metrics";
import { IStore } from "../store/metrics-store.types";

const host = window.location.origin;

export const parseQuery = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const technology = JSON.parse(
    decodeURI(urlParams.get("technology") || "[0]")
  );

  const system = JSON.parse(decodeURI(urlParams.get("system") || "[0]"));
  const people = JSON.parse(decodeURI(urlParams.get("people") || "[0]"));
  const process = JSON.parse(decodeURI(urlParams.get("process") || "[0]"));
  const influence = JSON.parse(decodeURI(urlParams.get("influence") || "[0]"));
  const name = JSON.parse(decodeURI(urlParams.get("name") || `[""]`));
  console.log(name, influence, process, people, system, technology);

  return name.map((_: any, index: number) => {
    return {
      name: name[index],
      [axes.TECHNOLOGY]: technology[index],
      [axes.SYSTEM]: system[index],
      [axes.PEOPLE]: people[index],
      [axes.PROCESS]: process[index],
      [axes.INFLUENCE]: influence[index],
    };
  });
};

export const constructQuery = (metricsArray: IStore["metrics"]) => {
  const shareUrl = new URL(host);
  let name: any = [];
  let technology: any = [];
  let system: any = [];
  let people: any = [];
  let process: any = [];
  let influence: any = [];

  metricsArray.forEach((element) => {
    name.push(element.name);
    technology.push(element[axes.TECHNOLOGY]);
    system.push(element[axes.SYSTEM]);
    people.push(element[axes.PEOPLE]);
    process.push(element[axes.PROCESS]);
    influence.push(element[axes.INFLUENCE]);
  });
  shareUrl.searchParams.append("name", JSON.stringify(name));
  shareUrl.searchParams.append("technology", JSON.stringify(technology));
  shareUrl.searchParams.append("system", JSON.stringify(system));
  shareUrl.searchParams.append("people", JSON.stringify(people));
  shareUrl.searchParams.append("process", JSON.stringify(process));
  shareUrl.searchParams.append("influence", JSON.stringify(influence));
  return shareUrl;
};
