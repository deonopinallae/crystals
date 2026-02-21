interface IntentionProtectIconProps {
	size?: number | string
	color?: string
	className?: string
}

export const IntentionProtectIcon = ({
	size = 104,
	color = 'currentColor',
	className,
}: IntentionProtectIconProps) => (
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
		<g transform="translate(12 32)">
			<path
				d="M1.19636 21.5786C28.7108 -12.9374 68.3502 2.24984 80.0089 21.5786C63.2204 46.9826 17.0521 50.5723 1.19636 21.5786Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
		<g transform="translate(40 40)">
			<path
				d="M12.6198 24C19.0372 24 24.2396 18.8513 24.2396 12.5C24.2396 6.14873 19.0372 1 12.6198 1C6.20236 1 1 6.14873 1 12.5C1 18.8513 6.20236 24 12.6198 24Z"
				stroke={color}
				strokeWidth="2"
			/>
		</g>
	</svg>
)
