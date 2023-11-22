<template>
	<div class="py-4 container-fluid">
		<div class="mt-4 row">
			<div class="col-12 d-flex justify-content-center">
				<div class="card mb-4 p-4" style="width: 100%">
					<h3>{{ todo?.title ?? 'title' }}</h3>

					<div class="mt-4">
						<h4>Deskription:</h4>
						<p>{{ todo?.description ?? 'description' }}</p>
					</div>

					<div>
						<h4>Completion</h4>
						<p>{{ (todo?.completed ? 'DONE' : 'NEED TO DO') ?? 'completion' }}</p>
					</div>

					<div class="mt-4">
						<button @click="goEdit" type="button" class="btn btn-success me-3">Edit</button>
						<button @click="removeTodo" type="button" class="btn btn-danger">Delete</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTodoStore } from '@/store/todo'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const store = useTodoStore()
onMounted(async () => await store.init())

const todo = store.getDetail(id).value

async function removeTodo() {
	await store.removeTodo(id)
	router.push({
		name: 'Tables'
	})
}

function goEdit() {
	router.push({
		path: `/tables/${id}/edit`
	})
}
</script>

<style lang="scss" scoped></style>
