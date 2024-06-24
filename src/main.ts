import * as lodash from "lodash";

const names = ["Anna", "Ben", "Frank", "Suzy"];
const moreNames = ["Ben", "Joe", "Suzy", "Tom"];

//? aus der lodash Bibliothek die Funktion unionWith nutzen:
//? vereint zwei Arrays und reduziert sie ohne Dopplungen
const uniqieNames = lodash.unionWith(names, moreNames);

const appDiv = document.querySelector(".app-div");
if (appDiv){
  appDiv.innerHTML = uniqieNames.join(", ");
}