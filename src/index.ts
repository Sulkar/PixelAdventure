import "./style/myStyle.scss";
import "bootstrap";
import { Controller } from "./Controller";
import { BattleScene } from "./components/battle/BattleScene";


//start
const app = document.getElementById("app");

//create normal paragraph
const p = document.createElement("p");
p.textContent = "Hello World";

//create bootstrap button
const button = document.createElement("button");
button.textContent = "Drück mich!";
button.className = "btn btn-success";
button.type = "button";
button.addEventListener("click", function () {
    alert("Hello World!");
});

app?.append(p);
app?.append(button);

const battleScene = new BattleScene();
app?.append(battleScene.createScene());
battleScene.addPlayer();

//controller with state
Controller.instance.editState("info", 123);

p.textContent = Controller.instance.getState().get("info");