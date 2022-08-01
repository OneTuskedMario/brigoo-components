import { InputBaseComponentProps } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from 'react';
import { FieldErrors } from 'react-hook-form';
import { colors } from '../../constants/colors';

type InputProps = {
    label: string;
    mainColor?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    value: string;
    type?: string;
    formProp?: InputBaseComponentProps | undefined;
    messageType?: string;
    errorProp?: FieldErrors<any> | undefined;
    className?: string;
    isMobile?: boolean;
    hasDots?: boolean;
    errorEndIcon?: false | JSX.Element | undefined;
    autoFocus?: boolean;
    autoComplete?: string;
};

const TextInput = ({
    label,
    mainColor = colors.main,
    onChange,
    value,
    type,
    formProp,
    errorProp,
    className,
    isMobile,
    hasDots = false,
    errorEndIcon,
    autoFocus = false,
    autoComplete,
}: InputProps) => {
    const noDots = label.split('.').join('');
    return (
        <>
            <div className="relative">
                <TextField
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    className={className}
                    label={label}
                    variant="outlined"
                    type={type}
                    onChange={onChange}
                    fullWidth={true}
                    inputProps={{
                        style: { borderRadius: '999px' },
                        ...formProp,
                    }}
                    InputLabelProps={{
                        style: {
                            fontStyle: 'italic',
                            fontSize: isMobile ? '0.888rem' : '1rem',
                        },
                        sx: {
                            transform:
                                !value && isMobile
                                    ? 'translate(30px, 12.5px) scale(1)'
                                    : !value
                                    ? 'translate(30px, 13px) scale(1)'
                                    : isMobile
                                    ? 'translate(17px, -9px) scale(0.75)'
                                    : 'translate(14px, -9px) scale(0.75)',
                            '&.Mui-focused': {
                                transform: isMobile
                                    ? 'translate(17px, -9px) scale(0.75)'
                                    : 'translate(14px, -9px) scale(0.75)',
                                color: `${mainColor}`,
                                visibility: hasDots ? 'hidden' : 'visible',
                                '&.Mui-focused:after': {
                                    visibility: 'visible',
                                    display: !hasDots ? 'none' : 'inline',
                                    position: 'absolute',
                                    left: hasDots ? '5px' : '0px',
                                    content: `"${noDots}"`,
                                },
                            },
                            color: !value ? `${colors.fadedText}` : `${mainColor}`,
                            visibility: !value ? 'visible' : 'hidden',
                            '&:after': {
                                visibility: 'visible',
                                display: !value ? 'none' : 'inline',
                                position: 'absolute',
                                left: hasDots ? '5px' : '0px',
                                content: `"${noDots}"`,
                            },
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderRadius: '9999px',
                                borderWidth: '2px',
                                borderColor:
                                    !value && !!errorProp
                                        ? `${colors.validation}`
                                        : !value
                                        ? `${colors.grey}`
                                        : errorProp === undefined
                                        ? `${mainColor}`
                                        : `${colors.validation}`,
                            },
                            '&:hover fieldset': {
                                borderColor:
                                    !value && !!errorProp
                                        ? `${colors.validation}`
                                        : !value
                                        ? `${colors.grey}`
                                        : errorProp === undefined
                                        ? `${mainColor}`
                                        : `${colors.validation}`,
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor:
                                    errorProp === undefined
                                        ? `${mainColor}`
                                        : `${colors.validation}`,
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            paddingY: isMobile ? '11px' : '13px',
                            paddingX: '32px',
                            borderRadius: '9999px',
                        },
                    }}
                />
                {errorEndIcon}
            </div>
            <div className="text-error text-center">{errorProp?.message as any as string}</div>
        </>
    );
};

TextInput.displayName = 'TextInput';

export default TextInput;