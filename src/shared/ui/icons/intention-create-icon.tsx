interface IntentionCreateIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionCreateIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionCreateIconProps) => (
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
		<g transform="translate(25.7657 24)">
			<path
				d="M1 51V29.5088C1 13.7638 12.5356 1 26.7656 1C40.9956 1 52.5313 13.7638 52.5313 29.5088V51"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
		<g transform="translate(33.849 32)">
			<path
				d="M1 43V20.386C1 9.6794 8.91662 1 18.6823 1C28.448 1 36.3646 9.6794 36.3646 20.386V43"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
		<g transform="translate(41.4271 40.5)">
			<path
				d="M1 34.5V12.0777C1 5.9597 5.52384 1 11.1042 1C16.6845 1 21.2083 5.9597 21.2083 12.0777V34.5"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
	</svg>
)
