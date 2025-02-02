const BASE_URL = window.location.origin;
import "./navigation.style.css";

export default class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return `
        <nav>
          <ul class="menu container-fluid">
              <li>
                  <a href="#">1. Stacks</a>
                  <ul class="submenu">
                      <li><a href="/pages/stacks/basic.html" title="Basic stack">1.1 - Basic</a></li>
                      <li><a href="/pages/stacks/nested.html" title="Nested stack">1.2 - Nested</a></li>
                      <li><a href="/pages/stacks/recursive.html" title="recursive stack">1.3 - Recursive</a></li>
                      <li><a href="/pages/stacks/semantic-stack.html" title="List semantic stack">1.4 - List Semantics</a></li>

                  </ul>
              </li>

              <li>
                  <a href="#">2. Box</a>
                  <ul class="submenu">
                      <li><a href="/pages/box/box-basic.html" title="Basic box">2.1 - Basic box</a></li>
                      <li><a href="/pages/box/box-with-a-stack.html" title="A Box within a Stack">2.2 - A Box within a Stack</a></li>
                      <li><a href="/pages/box/box-with-a-header.html" title="Box with a header">2.3 - Box with a header</a></li>
                  </ul>
              </li>
          </ul>
        </nav>

        <div class="container-sm | mb-4">
          <h1>${document.title}</h1>
          <hr />
        </div>
      `;
  }
}

customElements.define("navigation-bar", NavigationBar);
