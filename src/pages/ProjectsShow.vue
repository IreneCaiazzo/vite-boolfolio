<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },
    created() {
        //richiesta axios per i dati del project
        axios.get(this.store.baseUrl + 'api/projects' + this.$route.params.slug)
            .then(response => console.log(response));
    },
};
</script>

<template>
    <h2>sono la show</h2>
</template>

<style></style>