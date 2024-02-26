export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    iconbefore?: React.ReactNode,
}

export const Input = ({...props}:IInputProps) => {
    return (
        <div className="relative">
            <input className={`py-3 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${props.className}`} {...props} />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                {props.iconbefore}
            </div>
        </div>
    )
}

export default Input;