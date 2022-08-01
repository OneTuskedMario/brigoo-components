import clsx from 'clsx';
import { forwardRef } from 'react';
import Spinner from '../Spinner';


const variants = {
    primary: 'bg-white text-main hover:text-white hover:bg-main',
    networker: 'bg-white text-networkerMain border-networkerMain hover:text-white hover:bg-networkerMain',
    inverse: 'bg-main text-white hover:bg-white hover:text-main',
    'event-false': 'bg-main text-white',
    'event-true': 'bg-redOrange text-white',
    danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
    none: 'hover:opacity-80',
    'preference-true': '!bg-main text-white hover:bg-white hover:text-main hover:bg-white',
    'preference-false':
        '!bg-eggShell text-softGrey border-softGrey hover:border-main hover:text-main hover:bg-white',
    toggle: 'bg-white text-fadedText',
    preference: 'bg-eggShell text-softGrey border-softGrey',
    preferenceSame: 'text-white bg-gradient-to-r from-main to-preferenceButtonGradient',
    profile:
        'flex !justify-center w-full rounded-full !py-[11px] !font-normal text-lg !border-0 drop-shadow-[0_0_43px_rgba(0,0,0,0.05)]',
};

const sizes = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6 text-md',
    lg: 'py-3 px-8 text-lg',
};

type IconProps = { hasEndIcon?: boolean };

interface ArrowWhitePropTypes {
    isHover?: boolean;
}

const Arrow = ({
    isHover,
}: ArrowWhitePropTypes): JSX.Element => {
    return (
        <svg
            className={clsx(
                'transform transition-all ease-in-out delay-150 duration-150',
                isHover ? 'text-white mx-0' : 'text-main mx-2'
            )}
            width="22"
            height="8"
        >
            <path
                fill="currentColor"
                d="M1.23242 3.5c-.276141 0-.499998.22386-.499998.5s.223857.5.499998.5v-1Zm20.57218.85355c.1952-.19526.1952-.51184 0-.7071L18.6226.464466c-.1953-.195262-.5119-.195262-.7071 0-.1953.195262-.1953.511845 0 .707104L20.7439 4l-2.8284 2.82843c-.1953.19526-.1953.51184 0 .7071.1952.19527.5118.19527.7071 0l3.182-3.18198ZM1.23242 4.5H21.451v-1H1.23242v1Z"
            />
        </svg>
    );
};


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
    isDisabled?: boolean;
    isHover?: boolean;
    setIsHover?: React.Dispatch<React.SetStateAction<boolean>>;
} & IconProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            type = 'button',
            className = '',
            variant = 'primary',
            size = 'md',
            isLoading = false,
            isDisabled,
            isHover = false,
            hasEndIcon,
            setIsHover = () => {},
            ...props
        },
        ref
    ) => {
        return (
            <button
                disabled={isDisabled}
                ref={ref}
                type={type}
                className={clsx(
                    'flex justify-between border-2 border-main items-center disabled:bg-grey disabled:text-white disabled:border-opacity-0 disabled:cursor-not-allowed rounded-full shadow-sm font-medium focus:outline-none transform transition-colors ease-in-out delay-150 duration-150',
                    variants[variant],
                    sizes[size],
                    className
                )}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                {...props}
            >
                <span className="mx-2 flex items-center self-center">{props.children}</span>
                <div>
                    {!isLoading && hasEndIcon && (
                        <Arrow isHover={isHover} />
                    )}
                    {isLoading && <Spinner size="sm" className="text-current mx-2" />}
                </div>
            </button>
        );
    }
);

export default Button;