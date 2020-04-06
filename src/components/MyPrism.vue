<template>
  <div ref="code">
    <slot></slot>
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-scss.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';

export default {
  mounted() {
    // 需要塞入<code></code>元素
    Prism.highlightElement(this.$refs.code.children[0].children[0]);
    // 此方法也可行 但理論上效能較差
    // Prism.highlightAll();
  }
}
</script>