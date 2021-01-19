<template>
    <div class="slot_controller">
      <slot></slot>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            controller: null,
        };
    },
    methods: {
        createController() {
            const ScrollMagic = require("scrollmagic");
            let ScrollMagicPluginIndicator = require("scrollmagic-plugins")
                .ScrollMagicPluginIndicator;
            ScrollMagicPluginIndicator(ScrollMagic);

            this.controller = new ScrollMagic.Controller({
                addIndicators: true,
            });
            this.$root.$emit("controller_created", this.controller);
            this.$root.$on("scene_created", (scene) => {
                this.controller.addScene(scene);
            });
        },
    },
    async mounted() {
        await this.$nextTick;
        this.createController();
    },
};
</script>
