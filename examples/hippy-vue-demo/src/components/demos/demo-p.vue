<template>
  <div class="p-demo">
    <div>
      <label>不带样式：</label>
      <p
        class="p-demo-content"
        @touchstart="onTouchTextStart"
        @touchmove="onTouchTextMove"
        @touchend="onTouchTextEnd"
      >
        这是最普通的一行可点击文字
      </p>
      <p
        class="p-demo-content-status"
      >
        当前touch状态: {{ labelTouchStatus }}
      </p>
      <label>颜色：</label>
      <p class="p-demo-1 p-demo-content">
        这行文字改变了颜色
      </p>
      <label>尺寸：</label>
      <p class="p-demo-2 p-demo-content">
        这行改变了大小
      </p>
      <label>粗体：</label>
      <p class="p-demo-3 p-demo-content">
        这行加粗了
      </p>
      <label>下划线：</label>
      <p class="p-demo-4 p-demo-content">
        这里有条下划线
      </p>
      <label>删除线：</label>
      <p class="p-demo-5 p-demo-content">
        这里有条删除线
      </p>
      <label>自定义字体：</label>
      <p class="p-demo-6 p-demo-content">
        腾讯字体 Hippy
      </p>
      <label>文字阴影：</label>
      <p
        class="p-demo-7 p-demo-content"
        :style="textShadow"
        @click="changeTextShadow"
      >
        这里是文字灰色阴影，点击可改变颜色
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textShadowIndex: 0,
      isClicked: false,
      isPressing: false,
      labelTouchStatus: '',
      textShadow: {
        textShadowOffset: {
          x: 1,
          y: 1,
        },
        // support declare textShadowOffsetX & textShadowOffsetY separately
        // textShadowOffsetX: 1,
        // textShadowOffsetY: 1,
        textShadowRadius: 3,
        textShadowColor: 'grey',
      },
    };
  },
  methods: {
    changeTextShadow() {
      this.textShadow = {
        textShadowOffsetX: this.textShadowIndex % 2 === 1 ? 10 : 1,
        textShadowOffsetY: 1,
        textShadowRadius: 3,
        textShadowColor: this.textShadowIndex % 2 === 1 ? 'red' : 'grey',
      };
      this.textShadowIndex += 1;
    },
    // text/span/label/p/a element touch event is supported after hippy-vue 2.6.2
    onTouchTextStart(evt) {
      this.labelTouchStatus = 'touch start';
      console.log('onTextTouchDown', evt);
      evt.stopPropagation();
    },
    // text/span/label/p/a element touch event is supported after hippy-vue 2.6.2
    onTouchTextMove(evt) {
      this.labelTouchStatus = 'touch move';
      console.log('onTextTouchMove', evt);
      evt.stopPropagation();
      console.log(evt);
    },
    // text/span/label/p/a element touch event is supported after hippy-vue 2.6.2
    onTouchTextEnd(evt) {
      this.labelTouchStatus = 'touch end';
      console.log('onTextTouchEnd', evt);
      evt.stopPropagation();
      console.log(evt);
    },
  },
};
</script>

<style scoped>
.p-demo {
  margin: 7px;
  overflow-y: scroll;
  flex: 1;
  flex-direction: column;
}

.p-demo .p-demo-content {
  margin: 20px;
}

.p-demo .p-demo-content-status {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.p-demo .p-demo-1 {
  color: #f44837;
}
.p-demo .p-demo-2 {
  font-size: 30px;
}
.p-demo .p-demo-3 {
  font-weight: bold;
}

.p-demo .p-demo-4 {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

.p-demo .p-demo-5 {
  text-decoration-line: line-through;
  text-decoration-color: red;
}

.p-demo .p-demo-6 {
  color: #0052d9;
  font-family: TTTGB;
  font-size: 32px;
}

.p-demo .p-demo-7 {
  /*text-shadow-offset: 1px 1px; !* not support declared separately *!*/
  /*text-shadow-radius: 3;*/
  /*text-shadow-color: grey;*/
}
</style>
