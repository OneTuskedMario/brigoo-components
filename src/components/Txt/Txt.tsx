import React from 'react';
import clsx from 'clsx';

const colors = {
    black: 'text-dark',
    main: 'text-main',
    networkerMain: 'text-networkerMain',
    white: 'text-white',
    grey: 'text-grey',
    softGrey: 'text-softGrey',
    faded: 'text-fadedText',
    faded2: 'text-fadedText2',
    faded3: 'text-fadedText3',
    eggShell: 'text-eggShell',
    gradient1: `text-mainGradient1`,
    gradient2: `text-mainGradient2`,
    error: `text-error`,
    darkBlue: `text-darkBlue`,
    romanSilver: `text-romanSilver`,
    darkSilver: `text-darkSilver`,
};

const sizes = {
    h1: 'lg:text-h1 text-2xl lg:font-medium font-regular tracking-[0.02em] ',
    h2: 'lg:text-h2 text-xl lg:font-medium font-regular tracking-[0.03em]',
    'h2.5': 'text-xl sm:text-4xl sm:font-semibold font-regular tracking-[0.02em]',
    h3: 'lg:text-2xl text-lg lg:font-medium font-regular tracking-normal',
    h4: 'lg:text-lg text-base lg:font-medium font-regular tracking-normal',
    p: 'text-xs lg:text-base font-regular tracking-normal',
    sm: 'text-sm font-regular tracking-normal',
    xs: 'text-xs font-regular tracking-normal',
    pt: 'text-[16px] font-regular tracking-normal',
    b: 'text-xs font-regular tracking-[0.03em]',
};

const lineHeights = {
    taller: '!leading-[63px]',
    tall: '!leading-[60px]',
    standart: '!leading-[40px]',
    regular: '!leading-[30px]',
    short: '!leading-[26px]',
    shorter: '!leading-[25px]',
    tiny: '!leading-[14px]',
};

export type TxtProps = {
    color?: keyof typeof colors;
    size?: keyof typeof sizes;
    lineHeight?: keyof typeof lineHeights;
    className?: string;
    children: any;
};

const Txt = ({
    color = 'black',
    size = 'p',
    lineHeight = 'shorter',
    className = '',
    children,
}: TxtProps) => {
    return (
        <div
            className={clsx('flex', lineHeights[lineHeight], sizes[size], colors[color], className)}
        >
            {children}
        </div>
    );
};

Txt.displayName = 'Txt';

export default Txt;