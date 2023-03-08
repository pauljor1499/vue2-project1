<template>
    <div class="page1-content">
        <h1>Registration</h1>
        <br />
        <v-row dense>
            <v-col cols="6">
                <v-text-field outlined dense></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field outlined dense></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field outlined dense></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field outlined dense></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
.page1-content {
    width: 50%;
    padding: 5%;
}
</style>
