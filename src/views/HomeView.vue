<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import Carausel1Component from '@/components/Carausel1Component.vue'
import Carausel2Component from '@/components/Carausel2Component.vue'
import CardComponent from '@/components/CardComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    Carausel1Component,
    Carausel2Component,
    CardComponent,
    PaginationComponent
  }
}
</script>

<template>
  <NavbarComponent />
  <Carausel1Component />
  <Carausel2Component />
  <CardComponent />
  <PaginationComponent />
</template>
