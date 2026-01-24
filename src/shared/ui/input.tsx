import { forwardRef, InputHTMLAttributes } from 'react'
import { COLORS } from '@/shared/lib/colors'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	className?: string
	type: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ placeholder, className, type, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				placeholder={placeholder}
				className={`${className} bg-white border text-[12px] py-[0.44rem] px-[0.94rem] rounded-[15px] block`}
				style={{
					color: COLORS.TEXT_DARK,
				}}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'
