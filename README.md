# \<file-open-in-editor>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i file-open-in-editor
```

## Usage

Set your workspace.

```
localStorage.setItem('DEV_WORKSPACE_PATH', '/User/name/Workspace/MyProject/')
```

```html
<script type="module">
  import 'file-open-in-editor/file-open-in-editor.js';
</script>

<file-open-in-editor src="src/component/header.js"></file-open-in-editor>
```
