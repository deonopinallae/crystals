'use client'
import { useRouter } from "next/navigation"

export const BackBtn = () => {
	const router = useRouter()
	return (
		<button onClick={() => router.back()}>
		</button>
	)
}
