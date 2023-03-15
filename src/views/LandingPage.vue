<template>
    <div class="main-content">
        <NavBar />
        <BodyContent />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BodyContent from "@/components/HelloWorld.vue";

export default {
    components: {
        BodyContent,
        NavBar,
    },

    data() {
        return {};
    },
};
</script>
