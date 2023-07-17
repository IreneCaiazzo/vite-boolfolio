<script>
import axios from 'axios';

export default {
    data() {
        return {
            arrProjects: [],
            currentPage: 1,
            nPages: 0,
        }
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
            this.getProjects();
        },
        getProjects() {
            axios
                .get('http://127.0.0.1:8000/api/projects', {
                    params: {
                        page: this.currentPage,
                    }
                })
                .then(response => {
                    this.arrProjects = response.data.data
                    this.nPages = response.data.last_page
                });
        }
    },
    created() {
        //richiesta dati al server
        axios
            .get('http://localhost:8000/api/projects', {
                params: {
                    page: this.currentPage,
                }
            })
            .then(response => {
                this.arrProjects = response.data.data
                this.nPages = response.data.last_page
            });
    },
};
</script>

<template>
    <h1>Questi sono i projects</h1>
    <ul>
        <li v-for="project in arrProjects" :key="project.id">
            {{ project.title }}
        </li>
    </ul>

    <nav>
        <ul class="pagination">
            <li class="page-item disabled">
                <a class="page-link">Previous</a>
            </li>

            <li v-for="page in nPages" :key="page" class="page-item" :class="{ active: page == currentPage }">
                <span class="page-link" @click="changePage(page)">
                    {{ page }}
                </span>
            </li>

            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>