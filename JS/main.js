import { login, logout, signup } from "./auth.js";
import { add } from "./math.js";

login();
logout();
signup();

console.log(add(10,30));
