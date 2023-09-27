import { Login } from "./login.js";
import { Cxmsg } from "./cxmsg.js";

const callback_ok = () => {

}

const callback_naook = () => {
    const config = {
        cor:"red",
        tipo:"ok",
        textos: null,
        comando_sn: null
    }
    Cxmsg.mostrar(config, "Login", "Login não efetuado! Usuário ou senha incorretos.");
}

Login.login(callback_ok, callback_naook);