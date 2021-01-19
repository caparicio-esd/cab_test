<template>
  <section :id="controllerIdAttr" class="panel flex items-center justify-center	" :style="{...computedStyle}" ref="lol">
      <span class="title" ref="title">
        {{scene.title}}--{{scene.bgColor}}
      </span>
  </section>
</template>

<script>
import { mapState } from "vuex";
import animejs from "animejs";

export default {
    props: {
        scene: {
            type: Object,
        },
        controllerId: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            animation: null,
            subscene: [],
        };
    },
    computed: {
        controllerIdAttr() {
            return `panel-id-${this.controllerId}`;
        },
        computedStyle() {
            return {
                backgroundColor: this.scene.bgColor,
                color: "white",
            };
        },
    },
    methods: {
        setSceneScrollable(controller) {
            let ScrollMagic = require("scrollmagic");
            
            this.animation = animejs({
                targets: [this.$refs.title],
                rotate: {
                    value: 360,
                    easing: "easeInOutSine",
                },
                scale: [1, 1.5, 1, 2, 1],
                translateX: [-100, 100, 0],
                autoplay: false,
            });

            this.subscene[0] = new ScrollMagic.Scene({
                triggerElement: this.$refs.lol,
                duration: "100%",
                triggerHook: "onLeave",
            })
                .setPin(this.$refs.lol)
                .addIndicators()
                .on("progress", (ev) => {
                    this.animation.seek(ev.progress * this.animation.duration);
                });

            this.$root.$emit("scene_created", this.subscene[0]);
        },
    },
    async mounted() {
        await this.$nextTick();
        this.setSceneScrollable();
    },
};
</script>
<style lang="sass" scoped>
.panel
    height: 100vh
    .title
        display: inline-block
</style>