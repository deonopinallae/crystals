import { ReactNode, ButtonHTMLAttributes } from 'react'
import { COLORS } from '@/shared/lib/colors'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={` bg-[#000000] rounded-[32px] py-[14px] px-[36px] text-[20px] font-bricolage uppercase text-white ${className ?? ''}`}
			style={{ backgroundColor: COLORS.BLACK }}
		>
			<span>{children}</span>
		</button>
	)
}
