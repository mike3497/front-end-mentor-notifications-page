import imageMarkWeber from '@/assets/imgs/avatar-mark-webber.webp';
import imageAngelaGray from '@/assets/imgs/avatar-angela-gray.webp';
import imageJacobThompson from '@/assets/imgs/avatar-jacob-thompson.webp';
import imageRizkyHasanuddin from '@/assets/imgs/avatar-rizky-hasanuddin.webp';
import imageKimberlySmith from '@/assets/imgs/avatar-kimberly-smith.webp';
import imageNathanPeterson from '@/assets/imgs/avatar-nathan-peterson.webp';
import imageAnnaKim from '@/assets/imgs/avatar-anna-kim.webp';
import imageChess from '@/assets/imgs/image-chess.webp';

export default [
	{
		user: {
			name: 'Mark Webber',
			image: imageMarkWeber,
		},
		type: 'post-reaction',
		post: 'My first tournament today!',
		time: '1m ago',
		read: false,
	},
	{
		user: {
			name: 'Angela Gray',
			image: imageAngelaGray,
		},
		type: 'followed-you',
		time: '5m ago',
		read: false,
	},
	{
		user: {
			name: 'Jacob Thompson',
			image: imageJacobThompson,
		},
		type: 'joined-group',
		group: 'Chess Club',
		time: '1 day ago',
		read: false,
	},
	{
		user: {
			name: 'Rizky Hasanuddin',
			image: imageRizkyHasanuddin,
		},
		type: 'private-message',
		message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
		time: '5 days ago',
		read: true,
	},
	{
		user: {
			name: 'Kimberly Smith',
			image: imageKimberlySmith,
		},
		type: 'picture-comment',
		picture: imageChess,
		time: '1 week ago',
		read: true,
	},
	{
		user: {
			name: 'Nathan Peterson',
			image: imageNathanPeterson,
		},
		type: 'post-reaction',
		post: '5 end-game strategies to increase your win rate',
		time: '2 week ago',
		read: true,
	},
	{
		user: {
			name: 'Anna Kim',
			image: imageAnnaKim,
		},
		type: 'left-group',
		group: 'Chess Club',
		time: '2 week ago',
		read: true,
	},
];
