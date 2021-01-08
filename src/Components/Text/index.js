import React from 'react';
import {
    ExtraSmallWhiteText,
    SmallBlackText,
    SmallWhiteText,
    MediumBlackText,
    MediumWhiteText,
    LargeBlackText,
    LargeWhiteText,
    ExtraLargeBlackText,
    ExtraLargeWhiteText,
    SuperLargeWhiteText
} from './style'

const Text = ({color, size, children}) => {
    if (color === 'white' && size === 'extra-small'){
        return (
            <ExtraSmallWhiteText>{children}</ExtraSmallWhiteText>
        );
    }
    else if (color === 'black' && size === 'small'){
        return (
            <SmallBlackText>{children}</SmallBlackText>
        );
    }
    else if (color === 'white' && size === 'small'){
        return (
            <SmallWhiteText>{children}</SmallWhiteText>
        );
    }
    else if (color === 'black' && size === 'medium'){
        return (
            <MediumBlackText>{children}</MediumBlackText>
        );
    }
    else if (color === 'white' && size === 'medium'){
        return (
            <MediumWhiteText>{children}</MediumWhiteText>
        );
    }
    else if (color === 'black' && size === 'large'){
        return (
            <LargeBlackText>{children}</LargeBlackText>
        );
    }
    else if (color === 'white' && size === 'large'){
        return (
            <LargeWhiteText>{children}</LargeWhiteText>
        );
    }
    else if (color === 'black' && size === 'extra-large'){
        return (
            <ExtraLargeBlackText>{children}</ExtraLargeBlackText>
        );
    }
    else if (color === 'white' && size === 'extra-large'){
        return (
            <ExtraLargeWhiteText>{children}</ExtraLargeWhiteText>
        );
    }
    else if (color === 'white' && size === 'super-large'){
        return (
            <SuperLargeWhiteText>{children}</SuperLargeWhiteText>
        );
    }
}

export default Text;
