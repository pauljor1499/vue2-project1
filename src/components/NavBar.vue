<template>
    <div class="navbar">
        <div class="logo">
            <v-icon class="hamburger" size="35" @click="drawer = !drawer">
                mdi-menu
            </v-icon>
            <span> MathWorld </span>
            <v-avatar
                class="hamburger"
                color="primary"
                size="30"
                style="color: white; text-align: center"
            >
                RJ
            </v-avatar>
        </div>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            MathWorld
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            version 1.0
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list
                    dense
                    nav
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item
                        v-for="(item, index) in drawer_items"
                        :key="index"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon>
                                {{ item.icon }}
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-list>
        </v-navigation-drawer>
        <div class="nav-links">
            <router-link :to="'/'" class="nav-link">
                <span>Dashboard</span>
            </router-link>
            <router-link :to="'#all-classes'" class="nav-link">
                <span>All Classes</span>
            </router-link>
            <router-link :to="'#assignments'" class="nav-link">
                <span>Assignments</span>
            </router-link>
            <router-link :to="'#notes'" class="nav-link">
                <span>Notes</span>
            </router-link>
        </div>
        <v-avatar class="nav-avatar2" color="primary" style="color: white">
            RJ
        </v-avatar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            drawer_items: [
                { title: "Dashboard", icon: "mdi-view-dashboard" },
                { title: "Photos", icon: "mdi-image" },
                { title: "About", icon: "mdi-help-box" },
            ],
        };
    },
};
</script>

<style scoped>
* {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.navbar {
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
}

.logo .hamburger {
    display: none;
}

.logo span {
    font-size: 1.8rem;
}

.nav-links {
    display: flex;
    gap: 10px;
}

.nav-link {
    font-size: 1.2em;
    padding: 35px 20px 35px 20px;
    border-bottom: 3px solid white;
    background-color: white;
}

.nav-link span {
    color: black;
}

.nav-link:hover {
    background-color: #ecf8ff;
    border-bottom: 3px solid #0091de;
}

a.router-link-exact-active {
    background-color: #ecf8ff;
    border-bottom: 3px solid #0091de;
}

@media only screen and (max-width: 600px) {
    .navbar {
        padding: 0;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    }

    .logo {
        width: 100%;
        padding: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
    }

    .nav-links {
        display: none;
    }

    .logo .hamburger {
        display: block;
    }

    .logo span {
        font-size: 1.8rem;
    }

    .nav-avatar2 {
        display: none;
    }
}
</style>
