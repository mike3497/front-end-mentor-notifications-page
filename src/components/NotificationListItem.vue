<template>
	<div
		:class="
			notification.read
				? 'notification-list-item'
				: 'notification-list-item unread'
		"
	>
		<img
			:src="notification.user.image"
			:alt="notification.user.name"
			class="notification-list-item__user-image"
		/>
		<div class="notification-list-item__content content">
			<template v-if="notification.type === 'post-reaction'">
				<p class="content__message message">
					<span class="message__name">{{ notification.user.name }}&nbsp;</span>
					<span class="message__verbiage"
						>reacted to your recent post&nbsp;</span
					>
					<span class="message__post">{{ notification.post }}</span>
					<span class="message__new-icon" v-if="!notification.read"></span>
				</p>
				<p class="content__timestamp">{{ notification.time }}</p>
			</template>

			<template v-if="notification.type === 'followed-you'">
				<p class="content__message message">
					<span class="message__name">{{ notification.user.name }}&nbsp;</span>
					<span class="message__verbiage">followed you&nbsp;</span>
					<span class="message__new-icon" v-if="!notification.read"></span>
				</p>
				<p class="content__timestamp">{{ notification.time }}</p>
			</template>

			<template v-if="notification.type === 'joined-group'">
				<p class="content__message message">
					<span class="message__name">{{ notification.user.name }}&nbsp;</span>
					<span class="message__verbiage">has joined your group&nbsp;</span>
					<span class="message__group-name">{{ notification.group }}</span>
					<span class="message__new-icon" v-if="!notification.read"></span>
				</p>
				<p class="content__timestamp">{{ notification.time }}</p>
			</template>

			<template v-if="notification.type === 'private-message'">
				<p class="content__message message">
					<span class="message__name">{{ notification.user.name }}&nbsp;</span>
					<span class="message__verbiage">sent you a private message</span>
					<span class="message__new-icon" v-if="!notification.read"></span>
				</p>
				<p class="content__timestamp">{{ notification.time }}</p>
				<div class="content__private-message">
					{{ notification.message }}
				</div>
			</template>

			<template v-if="notification.type === 'picture-comment'">
				<p class="content__message message">
					<span class="message__name">{{ notification.user.name }}&nbsp;</span>
					<span class="message__verbiage">commented on your picture</span>
					<span class="message__new-icon" v-if="!notification.read"></span>
				</p>
				<p class="content__timestamp">{{ notification.time }}</p>
			</template>

			<template v-if="notification.type === 'left-group'">
				<p class="content__message message">
					<span class="message__name">{{ notification.user.name }}&nbsp;</span>
					<span class="message__verbiage">left the group</span>
					<span class="message__new-icon" v-if="!notification.read"></span>
				</p>
				<p class="content__timestamp">{{ notification.time }}</p>
			</template>
		</div>
		<img
			class="notifcation-list-item__image image"
			:src="notification.picture"
			v-if="notification.type === 'picture-comment'"
		/>
	</div>
</template>

<script setup>
defineProps({
	notification: Object,
});
</script>

<style lang="scss">
.notification-list-item {
	display: flex;
	border-radius: 0.5rem;
	padding: 1rem;
	margin: 0 0 0.5rem 0;

	&.unread {
		background-color: $veryLightGrayishBlue;
	}

	.notification-list-item__user-image {
		display: block;
		width: 4rem;
		height: 4rem;
		margin: 0 1rem 0 0;
	}

	.content {
		.message {
			margin: 0.5rem 0;
			line-height: 1.5;

			.message__name {
				font-weight: 800;
				cursor: pointer;

				&:hover {
					color: $blue;
				}
			}

			.message__verbiage {
				color: $darkGrayishBlue;
			}

			.message__group-name {
				cursor: pointer;
				color: $blue;
				font-weight: 800;
			}

			.message__post {
				color: $darkGrayishBlue;
				font-weight: 800;
				cursor: pointer;

				&:hover {
					color: $blue;
				}
			}

			.message__new-icon {
				display: inline-block;
				vertical-align: middle;
				background-color: $red;
				width: 0.5rem;
				height: 0.5rem;
				border-radius: 0.5rem;
				margin: 0 0 0 0.5rem;
			}
		}

		.content__timestamp {
			color: $grayishBlue;
		}

		.content__private-message {
			margin: 1rem 0 0 0;
			padding: 1rem;
			border-radius: 0.5rem;
			border: 1px solid $lightGrayishBlue1;
			color: $darkGrayishBlue;
			cursor: pointer;

			&:hover {
				background-color: $veryLightGrayishBlue;
			}
		}
	}

	.image {
		display: block;
		margin: 0.5rem 0 0 auto;
		padding: 0 0 0 1rem;
		width: 3rem;
		height: 3rem;
	}
}
</style>
