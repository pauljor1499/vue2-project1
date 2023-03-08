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
                localStorage.setItem(
                    "token",
                    JSON.stringify(result.data.access_token)
                );
                this.loading = false;
                this.error = null;
                return result;
            } catch (error) {
                this.error = error;
                this.loading = false;
            }
        },
    },
});
