interface IntentionCalmIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionCalmIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionCalmIconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 105.063 104"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="M52.5313 103C80.9912 103 104.063 80.1665 104.063 52C104.063 23.8335 80.9912 1 52.5313 1C24.0713 1 1 23.8335 1 52C1 80.1665 24.0713 103 52.5313 103Z"
			stroke={color}
			strokeWidth="2"
		/>
		<g transform="translate(12 44)">
			<path
				d="M0.0137102 1.0043C3.17894 1.0477 4.76327 3.3067 6.59082 5.9212C8.58164 8.7698 10.8365 12 15.2977 12C19.7589 12 22.0137 8.7698 24.0081 5.9212C25.853 3.2806 27.4477 1 30.672 1C33.8998 1 35.4945 3.2806 37.3394 5.9212C39.3302 8.7698 41.5886 12 46.0498 12C50.511 12 52.7658 8.7698 54.7602 5.9212C56.6051 3.2806 58.1999 1 61.4275 1C64.6553 1 66.2501 3.2806 68.095 5.9212C70.0858 8.7698 72.3442 12 76.8054 12"
				stroke={color}
				strokeWidth="2"
				strokeMiterlimit="10"
			/>
		</g>
	</svg>
)
