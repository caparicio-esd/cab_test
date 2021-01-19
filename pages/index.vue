<template>
  <div class="w-100 mx-auto">
    <client-only>
      <main-scroll-controller>
        <scroll-scene :scene="panels[0]" :controller-id="0" />
        <scroll-scene :scene="panels[1]" :controller-id="1" />
        <scroll-scene :scene="panels[2]" :controller-id="2" />
        <scroll-scene :scene="panels[3]" :controller-id="3" />
      </main-scroll-controller>
    </client-only>
  </div>
</template>

<script>
import MainScrollController from "@/components/ScrollController/MainScrollController";
import ScrollScene from "@/components/ScrollController/ScrollScene";
import { mapActions, mapState } from "vuex";

export default {
    components: {
        MainScrollController,
        ScrollScene,
    },
    data() {
        return {
            panels: [
                {
                    title: "panel 1",
                    bgColor: "#29b6f6",
                },
                {
                    title: "panel 2",
                    bgColor: "#ef5350",
                },
                {
                    title: "panel 3",
                    bgColor: "#ec407a",
                },
                {
                    title: "panel 4",
                    bgColor: "#66bb6a",
                },
            ],
        };
    },
    computed: {
        ...mapState({
            sections: state => state.sections.sections
        })
    },
    async fetch() {
        const sections = await fetch(
            "https://heroku-strapi-cab.herokuapp.com/secciones"
        )
            .then((d) => d.json())
            .then((d) => d);
        this.fetchSections(sections);
    },
    methods: {
        ...mapActions({
            fetchSections: "sections/fetchSections",
        }),
    },
};
</script>
