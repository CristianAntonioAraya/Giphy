import React from 'react'

const Gif = ({img}) => {
    return (
        <div className="gif__container">
            <img className="gif__img" src={img.url} alt="" />
        </div>
    )
}

export default Gif
