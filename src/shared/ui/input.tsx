import { forwardRef, InputHTMLAttributes } from 'react'

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
				className={`${className} bg-white border border-[#5F33E1] text-[#24252C] text-[12px] py-[0.44rem] px-[0.94rem] rounded-[15px] block`}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'
