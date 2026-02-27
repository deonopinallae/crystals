interface CircleDecoreIconProps {
	color: string
	className?: string
}

export const CircleDecoreIcon = ({ color, className }: CircleDecoreIconProps) => (
	<svg
		className={`w-[68px] h-[68px] ${className}`}
		viewBox="0 0 69 68"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_f_1_262)">
			<rect x="20" y="20" width="28.2917" height="28" rx="10" fill={color} />
		</g>
		<defs>
			<filter
				id="filter0_f_1_262"
				x="0"
				y="0"
				width="68.2917"
				height="68"
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
				<feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_1_262" />
			</filter>
		</defs>
	</svg>
)
