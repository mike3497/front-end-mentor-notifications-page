<template>
	<div>
		<NotificationListItem
			v-for="notification in notifications"
			:notification="notification"
		/>
	</div>
</template>

<script setup>
import NotificationListItem from './NotificationListItem.vue';

defineProps({
	notifications: Array,
});
</script>
