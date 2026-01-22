import { ReactNode } from "react"

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'
	children: ReactNode
	onClick?: () => void
	disabled?: boolean
}

export const AuthButton = ({ type, onClick, disabled, children }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={`mx-auto w-full relative block max-w-[20.69rem] p-[0.88rem] bg-[var(--main-dark-color)] rounded-[0.88rem] shadow-[0_10px_20px_rgba(95,51,225,0.2)]`}

		>
			<span className="text-white font-semibold text-md">{children}</span>
		</button>
	)
}
