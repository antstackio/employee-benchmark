import { axes } from "../definitions/employee-metrics";
import { IStore } from "../store/metrics-store.types";

const host = window.location.origin;

export const parseQuery = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const technology = parseInt(urlParams.get("technology") || "0");
  const system = parseInt(urlParams.get("system") || "0");
  const people = parseInt(urlParams.get("people") || "0");
  const process = parseInt(urlParams.get("process") || "0");
  const influence = parseInt(urlParams.get("influence") || "0");
  const name = decodeURI(urlParams.get("name") || "");
  return [
    {
      name,
      [axes.TECHNOLOGY]: technology,
      [axes.SYSTEM]: system,
      [axes.PEOPLE]: people,
      [axes.PROCESS]: process,
      [axes.INFLUENCE]: influence,
    },
  ];
};

export const constructQuery = (metricsArray: IStore["metrics"]) => {
  const shareUrl = new URL(host);
  metricsArray.forEach((element) => {
    shareUrl.searchParams.append("name", element.name);
    shareUrl.searchParams.append(
      "technology",
      element[axes.TECHNOLOGY].toString()
    );
    shareUrl.searchParams.append("system", element[axes.SYSTEM].toString());
    shareUrl.searchParams.append("people", element[axes.PEOPLE].toString());
    shareUrl.searchParams.append("process", element[axes.PROCESS].toString());
    shareUrl.searchParams.append(
      "influence",
      element[axes.INFLUENCE].toString()
    );
  });
  return shareUrl;
};
