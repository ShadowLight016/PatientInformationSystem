import { notAllowedCharacters } from "./modules.js";
document.getElementById("username").addEventListener("keyup", notAllowedCharacters);
document.getElementById("password").addEventListener("keyup", notAllowedCharacters);