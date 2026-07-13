export interface SequenceKeyFieldType {
    required: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
}
