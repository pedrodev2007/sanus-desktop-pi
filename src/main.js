import { Header } from "./components/Header";
import { Footer_nav } from "./components/Footer-nav";
const BODY = document.querySelector('body');

if (BODY.id == 'login-body') {
    Header();
} else {
    Header();
    Footer_nav();
}
