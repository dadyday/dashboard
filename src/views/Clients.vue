<template>
    <Entities :value="entities" :fields="fields" />
    <Entities :value="entities" :fields="fields2" />
    <Entities :value="products"/>
</template>

<script setup>
import { ref, computed } from 'vue'
import Entities from './comps/DataTable.vue'

const lorem = [
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    'At vero eos et accusam et justo duo dolores et ea rebum.',
    'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
];

const fields = ['id', 'description', 'user', 'createdOn', 'active', 'color', 'icon' ];
const fields2 = {id: Number, description: String, user: String, createdOn: Date, active: Boolean, color: String, icon: String};

const entities = [
    { id: 1, description: lorem[0], user: 'Max Muster', createdOn: '2020-04-01', active: true, color: 'red', icon: 'user'},
    { id: 3, description: lorem[1], user: 'Peter Silie', createdOn: '2022-11-01', active: false, color: '#080', icon: 'home'},
    { id: 2, description: lorem[2], user: 'Anna Lyse', createdOn: '2022-11-01', active: null, color: null, icon: null},
]

const products = ref([]);
fetch('/data/products.json')
    .then((resp) => resp.json())
    .then((obj) => setTimeout(() => products.value = obj.data, 2000))
;
</script>