import { PropsWithChildren } from "react";

export default function AuthLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className="flex justify-center w-full h-full py-12">
			{children}
		</div>
	);
}