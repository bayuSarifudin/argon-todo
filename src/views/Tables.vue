<template>
	<div class="py-4 container-fluid">
		<div class="mt-4 row">
			<div class="col-12">
				<projects-table :list-items="store.getTodo" />
			</div>
		</div>
	</div>
</template>

<script setup>
import ProjectsTable from './components/ProjectsTable.vue'
import { onMounted } from 'vue'
import { useTodoStore } from '@/store/todo'

const store = useTodoStore()

onMounted(async () => await store.init())
</script>
