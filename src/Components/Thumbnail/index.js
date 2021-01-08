import React from 'react';
import {
    ThumbnailContainer,
    Image
} from './style'

const Thumbnail = ({url}) => {
    return(
        <ThumbnailContainer>
            <Image src={url}/>
        </ThumbnailContainer>
    )
}

export default Thumbnail;
