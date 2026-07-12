export interface ButtonType {
    children: React.ReactNode
    style: string
    type: "button" | "reset" | "submit"
    handleClick?: () => void
    disabled?: boolean
}