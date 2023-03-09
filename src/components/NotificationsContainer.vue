<template>
	<div class="notifications-container">
		<div class="notifications-container-header header">
			<h1 class="header__heading">Notifications</h1>
			<div class="header__badge">{{ numberOfUnread }}</div>
			<button class="header__mark-all-button" @click="handleClickMarkAllAsRead">
				Mark all as read
			</button>
		</div>
		<NotificationsList :notifications="notifications" />
	</div>
</template>

<script setup>
import NotificationsList from './NotificationsList.vue';
import { ref, computed } from 'vue';
import notificationsData from '../assets/data/notifications';

const notifications = ref(notificationsData);

const numberOfUnread = computed(() => {
	let count = 0;

	notifications.value.forEach((value) => {
		if (!value.read) {
			count++;
		}
	});
	return count;
});

const handleClickMarkAllAsRead = () => {
	notifications.value.forEach((value) => {
		value.read = true;
	});
};
</script>

<style lang="scss">
.notifications-container {
	background-color: $white;
	border-radius: 1rem;
	padding: 1rem;
	max-width: 46rem;

	.header {
		display: flex;
		margin: 0 0 2rem 0;

		.header__heading {
			font-size: 1.5rem;
		}

		.header__badge {
			background-color: $blue;
			color: $white;
			margin: 0 0 0 0.5rem;
			padding: 0.25rem 0.75rem;
			text-align: center;
			border-radius: 0.5rem;
		}

		.header__mark-all-button {
			background: none;
			border: none;
			font-size: 1rem;
			color: $darkGrayishBlue;
			margin-left: auto;
			cursor: pointer;

			&:hover {
				color: $blue;
			}
		}
	}
}

@media (min-width: 48rem) {
	.notifications-container {
		padding: 2rem;
	}
}
</style>
