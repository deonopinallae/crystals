const BASE_PATH = '/crystals'

export const assetPath = (path: string): string => {
	if (path.startsWith('http')) return path
	return `${BASE_PATH}${path}`
}
