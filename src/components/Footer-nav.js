import "../style-global.css";

export function Footer_nav() {
    document.querySelector("footer").innerHTML = `
    <section id="nav-section"> <!-- barra de navegacao que deve estar presente na maioria das telas -->
        <nav id="nav-main">
            <ul id="nav-list">
                <li><a href="">VENDA (1)</a></li>
                <div class="vl"></div>
                <li><a href="">ESTOQUE (2)</a></li>
                <div class="vl"></div>
                <li><a href="">MENU (0)</a></li>
                <div class="vl"></div>
                <li><a href="">CLIENTE (3)</a></li>
                <div class="vl"></div>
                <li><a href="">SAIR (4)</a></li>
            </ul>
        </nav>
    </section>
    ` 
}