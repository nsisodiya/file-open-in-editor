# \<file-opener>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i file-opener
```

## Usage

Set your workspace.

```
localStorage.setItem('DEV_WORKSPACE_PATH', '/User/name/Workspace/MyProject/')
```

```html
<script type="module">
  import 'file-opener/file-opener.js';
</script>

<file-opener src="src/component/header.js"></file-opener>
```
