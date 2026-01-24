import { COLORS } from '@/shared/lib/colors'

export const PyramidIcon = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_1_56)">
			<path d="M16 2V30" stroke={COLORS.ICON_STROKE} strokeWidth="2" strokeMiterlimit="10" />
			<path
				d="M2 19L16 30L30 19L15.943 2L2 19Z"
				stroke={COLORS.ICON_STROKE}
				strokeWidth="2"
				strokeMiterlimit="10"
				strokeLinecap="square"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1_56">
				<rect width="32" height="32" fill="white" />
			</clipPath>
		</defs>
	</svg>
)
