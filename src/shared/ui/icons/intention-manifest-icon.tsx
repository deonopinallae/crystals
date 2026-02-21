interface IntentionManifestIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionManifestIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionManifestIconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 105.062 104"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="M52.5312 103C80.9912 103 104.062 80.1665 104.062 52C104.062 23.8335 80.9912 1 52.5312 1C24.0713 1 1 23.8335 1 52C1 80.1665 24.0713 103 52.5312 103Z"
			stroke={color}
			strokeWidth="2"
		/>
		<g transform="translate(52 20)">
			<path d="M1 24V0" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(52 60)">
			<path d="M1 24V0" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(60 52)">
			<path d="M0 1H24.25" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(20 52)">
			<path d="M0 1H24.25" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(58 34)">
			<path d="M0.703434 12.0245L12.135 0.710761" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(34 58)">
			<path d="M0.703433 12.0245L12.135 0.710761" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(34 34)">
			<path d="M12.135 12.0245L0.703434 0.710761" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(58 58)">
			<path d="M12.1351 12.0245L0.703431 0.710764" stroke={color} strokeWidth="2" />
		</g>
		<g transform="translate(48 48)">
			<path
				d="M4.03125 7C5.70536 7 7.0625 5.65685 7.0625 4C7.0625 2.34315 5.70536 1 4.03125 1C2.35714 1 1 2.34315 1 4C1 5.65685 2.35714 7 4.03125 7Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
	</svg>
)
