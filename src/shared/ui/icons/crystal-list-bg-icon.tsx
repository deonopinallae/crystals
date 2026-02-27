interface CrystalListBgIconProps {
	className?: string
}

export const CrystalListBgIcon = ({ className }: CrystalListBgIconProps) => (
	<svg
		width="659"
		height="652"
		viewBox="0 0 659 652"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<g filter="url(#blur0)">
			<circle cx="329.396" cy="326" r="220" fill="url(#paint0_radial_1_399)" />
		</g>
		<defs>
			<filter
				id="blur0"
				x="0"
				y="0"
				width="658.792"
				height="652"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur stdDeviation="56" result="effect1_foregroundBlur" />
			</filter>

			<radialGradient
				id="paint0_radial_1_399"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(329.396 326) rotate(90) scale(326 329.396)"
			>
				<stop stopColor="#FACCBF" stopOpacity="1" />
				<stop offset="1" stopColor="#FACCBF" stopOpacity="0" />
			</radialGradient>
		</defs>
	</svg>
)
