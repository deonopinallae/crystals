interface IntentionBalanceIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionBalanceIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionBalanceIconProps) => (
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
		<g transform="translate(16 46)">
			<path d="M0 1H72.75" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(38 48)">
			<path
				d="M1.74108 25.9846L15.7418 1.98456L29.7426 25.9846H1.74108Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
	</svg>
)
