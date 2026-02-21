interface IntentionHealIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionHealIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionHealIconProps) => (
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
		<g transform="translate(26 26)">
			<path
				d="M1.74109 46.9846L27.9925 1.98455L54.244 46.9846H1.74109Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
	</svg>
)
