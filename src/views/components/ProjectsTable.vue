<template>
	<div class="card mb-4">
		<div class="card-header pb-0 d-flex justify-content-between align-items-center">
			<h6>Todo table</h6>
			<router-link to="/create">
				<button type="button" class="btn btn-success">New Todo</button>
			</router-link>
		</div>
		<div class="card-body px-0 pt-0 pb-2">
			<div class="table-responsive p-0">
				<table class="table align-items-center justify-content-center mb-0">
					<thead>
						<tr>
							<th
								class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7">
								No.
							</th>
							<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
								Todo
							</th>
							<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
								Description
							</th>
							<th
								class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
								Completion
							</th>
							<th
								class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"></th>
						</tr>
					</thead>

					<tbody>
						<template v-if="listItems.length == 0">
							<div class="text-center d-flex justify-content-center" style="width: 100%">
								<p>No data</p>
							</div>
						</template>
						<template v-if="listItems.length > 0">
							<template v-for="(item, index) in listItems" :key="index">
								<tr>
									<td>
										<div class="d-flex px-2" style="width: 100%">
											<div class="my-auto text-center" style="width: 100%">
												<h6 class="mb-0 text-sm w-full" style="width: 100%">{{ index + 1 }}</h6>
											</div>
										</div>
									</td>
									<td>
										<div
											@click="() => goDetail(item.id)"
											class="d-flex px-2"
											style="cursor: pointer; width: 100%; height: 100%">
											<div class="my-auto">
												<h6 class="mb-0 text-sm">{{ item.title ?? 'title' }}</h6>
											</div>
										</div>
									</td>
									<td>
										<p class="text-sm font-weight-bold mb-0">
											{{ item.description ?? 'description' }}
										</p>
									</td>

									<td class="align-middle text-center">
										<div class="d-flex align-items-center justify-content-center">
											{{ item.completed ? 'DONE' : 'NOT DONE' }}
										</div>
									</td>
									<td class="align-middle">
										<button class="btn btn-link text-secondary mb-0">
											<i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
										</button>
									</td>
								</tr>
							</template>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
	listItems: {
		type: Array
	}
})

function goDetail(id) {
	router.push({
		path: `/tables/${id}`
	})
}
</script>
