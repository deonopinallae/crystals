import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`block bg-[var(--main-dark-color)] rounded-[7px] ${className ?? ''}`}
		>
			<span className="text-white font-semibold text-md">{children}</span>
		</button>
	)
}
