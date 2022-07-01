import "./src/style/settings/colors.css";
import  "./src/style/generic/reset.css";
import "./src/style/elements/base.css";
import CardGame from "./src/components/CardGame";

const $root  = document.querySelector("#root");
// Todo var que começa com $ guarda um elemento da tela, ou que vem da tela, Padrão usado em alguns locais
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);