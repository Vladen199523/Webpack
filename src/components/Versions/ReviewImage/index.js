import React from 'react';
import Image from 'components/Image';

class ReviewImage extends Image {
    render () {
        return (
            <Image src ={this.props.src} width={300} height={300} />
        )
    }
}

export default ReviewImage;