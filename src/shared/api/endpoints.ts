export const ENDPOINTS = {
	auth: {
		login: '/auth/login',
		register: '/auth/register',
		refreshToken: '/auth/login/access-token',
		logout: '/auth/logout',
	},
	user: {
		profile: '/user/profile',
		tasks: '/user/tasks',
		taskById: (id: string) => `/user/tasks/${id}`,
	},
}
