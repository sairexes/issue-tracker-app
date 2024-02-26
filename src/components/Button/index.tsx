
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | string;
    size?: 'sm' | 'md' | 'lg';
}

interface IKeyString {
    [key: string]: string;
}

const buttonColor:IKeyString = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    success: 'bg-teal-500 text-white hover:bg-teal-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    error: 'bg-red-500 text-white hover:bg-red-600',
    light: 'bg-white text-gray-800 hover:bg-gray-200',
}

const buttonSize:IKeyString = {
    sm: 'py-2 px-3',
    md: 'py-3 px-4',
    lg: 'p-4 sm:p-5',
}


export const Button = ({color = 'primary', size = 'sm', ...props}:IButtonProps) => {
    return (
        <button className={`${buttonSize[size]} inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${buttonColor[color]} shadow-sm disabled:opacity-50 disabled:pointer-events-none ${props.className}`} {...props}>{props.children}</button>
    )
}

export default Button;