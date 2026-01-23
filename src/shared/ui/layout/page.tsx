import { ReactNode } from 'react'
export const Page = ({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) => (
	<div className={`${className} pb-[5rem] gap-[1.25rem]  min-h-[100vh] min-w-full flex flex-col grow`}>
		{children}
	</div>
)
