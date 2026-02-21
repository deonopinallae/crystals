interface IntentionLoveIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionLoveIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionLoveIconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 105.063 104"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<circle cx="52.5313" cy="52" r="52" fill="#F0DCF1" />
		<path
			d="M52.5313 103C80.9912 103 104.063 80.1665 104.063 52C104.063 23.8335 80.9912 1 52.5313 1C24.0713 1 1 23.8335 1 52C1 80.1665 24.0713 103 52.5313 103Z"
			stroke={color}
			strokeWidth="2"
		/>
		<g transform="translate(20 24)">
			<path
				d="M22.2188 43C33.9376 43 43.4375 33.598 43.4375 22C43.4375 10.402 33.9376 1 22.2188 1C10.5 1 1 10.402 1 22C1 33.598 10.5 43 22.2188 43Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
		<g transform="translate(40 36)">
			<path
				d="M22.2188 43C33.9375 43 43.4375 33.598 43.4375 22C43.4375 10.402 33.9375 1 22.2188 1C10.5 1 1 10.402 1 22C1 33.598 10.5 43 22.2188 43Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
	</svg>
)
