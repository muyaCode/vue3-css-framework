const promotionRouter = [{
	path: '/promotion/fast-buy',
	name: 'PromotionFastBuy',
	component: () => import('./fast-buy/fast-buy.vue')
},{
	path: '/promotion/last-crazy',
	name: 'PromotionLastCrazy',
	component: () => import('./fast-buy/last-crazy.vue')
},{
	path: '/promotion/my-reminder',
	name: 'PromotionMyReminder',
	component: () => import('./fast-buy/my-reminder.vue')
},{
	path: '/promotion/ydftx',
	name: 'PromotionYdftx',
	component: () => import('./activities/ydftx.vue')
},{
	path: '/promotion/jjyz',
	name: 'PromotionJjyz',
	component: () => import('./activities/jjyz.vue')
},{
	path: '/promotion/qdpsfx',
	name: 'PromotionQdpsfx',
	component: () => import('./activities/qdpsfx.vue')
}]

export default promotionRouter