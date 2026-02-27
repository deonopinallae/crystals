import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={` bg-[#000000] rounded-[32px] py-[14px] px-[36px] text-[20px] font-bricolage uppercase text-white ${className ?? ''}`}
		>
			<span>{children}</span>
		</button>
	)
}
