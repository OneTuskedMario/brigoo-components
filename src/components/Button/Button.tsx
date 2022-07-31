import clsx from 'clsx';
import * as React from 'react';
import { Spinner } from '../Spinner';


const variants = {
    primary: 'bg-white text-main hover:text-white hover:bg-main',
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

type IconProps = { endIcon?: JSX.Element | undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
    isDisabled?: boolean;
    setIsHover?: React.Dispatch<React.SetStateAction<boolean>>;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            type = 'button',
            className = '',
            variant = 'primary',
            size = 'md',
            isLoading = false,
            isDisabled,
            endIcon,
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
                    {!isLoading && endIcon}
                    {isLoading && <Spinner size="sm" className="text-current mx-2" />}
                </div>
            </button>
        );
    }
);

Button.displayName = 'Button';
