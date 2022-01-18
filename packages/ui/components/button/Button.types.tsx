import React from "react";

export type ButtonProps = React.PropsWithChildren<{
    type?: 'primary' | 'secondary' | 'tertiary';
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
}>;
