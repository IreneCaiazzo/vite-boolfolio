<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store';

export default {
    components: {
        ProjectCard,
    },

    data() {
        return {
            arrProjects: [],
            arrTypes: [],
            currentPage: 1,
            nPages: 0,
            activePage: 1,
            store,
        };
    },
    methods: {
        toPrevPage() {
            this.currentPage != 1 ? this.currentPage-- : null;
        },
        toNextPage() {
            this.currentPage != this.nPages ? this.currentPage++ : null;
        },
        getProjects() {
            axios
                .get(this.store.baseUrl + 'api/projects', {
                    params: {
                        page: this.currentPage,
                        // FIXME: se stiamo già in posts.index non esegue il created() e qundi non aggiorna la ricerca
                        q: new URLSearchParams(window.location.search).get('q'),
                    },
                })
                .then(response => {
                    this.arrProjects = response.data.results.data;
                    this.nPages = response.data.results.last_page;
                });
        },

        getTypes() {
            axios.get(this.store.baseUrl + 'api/types').then(response => {
                this.arrTypes = response.data.results;
            });
        },
    },
    created() {
        //richiesta dati al db
        this.getProjects();
        this.getTypes();

    },
    watch: {
        currentPage() {
            this.getProjects();
        },
    },
};
</script>

<template>
    <form>
        <h2>Filtra projects</h2>
        <label for="type">Type</label>
        <select class="form-select" id="type">
            <option v-for="type in arrTypes" :key="type.id" :value="type.id">
                {{ type.name }}
            </option>
        </select>
    </form>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
        <div class="col" v-for="project in arrProjects" :key="project.id">
            <ProjectCard :objProject="project" />
        </div>
    </div>

    <nav>

        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage == 1 }">
                <a class="page-link" href="#" @click="toPrevPage">Previous</a>
            </li>

            <li v-for="  page   in   nPages  " :key="page" class="page-item" :class="{ active: page == currentPage }">
                <a class="page-link" href="#" @click="currentPage = page">
                    {{ page }}
                </a>
            </li>

            <li class="page-item" :class="{ disabled: currentPage == nPages }">
                <a class="page-link" href="#" @click="toNextPage">Next</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>