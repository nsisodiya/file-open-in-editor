const template = document.createElement('template');
template.innerHTML = `
  <style>
    .dot {
      display: none;
      background: blue;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      top: 0px;
      left: 0px;
      position: absolute;
    }
  </style>
  <a id="dot" class="dot"></a>`;

export class FileOpener extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const workstacePath = localStorage.getItem('DEV_WORKSPACE_PATH');

    if (workstacePath !== null) {
      const dot = this.shadowRoot.getElementById('dot');
      dot.setAttribute(
        'href',
        `vscode://file/${workstacePath}${this.getAttribute('src')}`
      );
      dot.style.display = 'block';
    }
  }
}
