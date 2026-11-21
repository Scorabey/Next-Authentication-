import { IIcon } from "@/shared"

export const XMark = ({ width = 24, height = 24, className = "", ...props }: IIcon) => {
    return (
        <svg 
            width={width} 
            height={height} 
            className={className} 
            stroke="currentColor"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            {...props}
        >
            <path d="M6 18L18 6M6 6L18 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
