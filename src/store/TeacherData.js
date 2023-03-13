import { defineStore } from "pinia";
import teacher_API from "@/api/teacher_api";

export const TeacherData = defineStore("TeacherData", {
    state: () => ({
        fetched: false,
        loading: false,
        error: null,
        accessdenied: false,
        user: null,
        queryLoading: false,
        queryError: null,
    }),

    getters: {},

    actions: {
        async register_teacher(teacher) {
            try {
                this.loading = true;
                const result = await teacher_API.prototype.register_teacher(
                    teacher
                );
                this.loading = false;
                this.error = null;
                return true;
            } catch (error) {
                this.error = error.response.data.detail;
                this.loading = false;
            }
        },

        async login_teacher(teacher) {
            try {
                this.loading = true;
                const result = await teacher_API.prototype.login_teacher(
                    teacher
                );
                this.loading = false;
                this.error = null;
                return true;
            } catch (error) {
                console.log(error);
                this.error = error.response.data.detail;
                this.loading = false;
            }
        },
    },
});
