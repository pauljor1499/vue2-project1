<template>
    <div class="page1-content">
        <v-card style="width: 50%">
            <v-card-title> Registration </v-card-title>
            <v-card-text>
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
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" width="100%" @click="register_teacher()">
                    Register
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { TeacherData } from "@/store/TeacherData";
export default {
    data() {
        return {
            store: TeacherData(),
        };
    },
    methods: {
        async register_teacher() {
            var obj = {
                first_name: "Paul",
                middle_name: "",
                last_name: "Jor",
                role: "teacher",
                school: "CJC",
                email: "paul1@gmail.com",
                password: "Admin123!",
                repeat_password: "Admin123!",
            };
            var response = await this.store.register_teacher(obj);
            console.log(response);
            console.log(this.store.error);
        },
    },
};
</script>

<style scoped>
.page1-content {
    width: 100%;
    padding: 5%;
}
</style>
