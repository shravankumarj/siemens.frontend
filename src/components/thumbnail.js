import React, { useEffect, useState } from 'react';



const ThumbNail = ({ data, onSelectImage, start, end, onNext, onPrevious, imageId }) => {


    const _largeImageData = imageId ? data.filter((item) => item.id === imageId)[0] : data[start]
    const [isClicked, setIsClicked] = useState(_largeImageData.id)

    const _data = data.slice(start, end)

    useEffect(() => {
        setIsClicked(_largeImageData.id);
    }, [_largeImageData.id])

    return (
        <><div className="thumbnails">
            <div className="group">

                {_data.map((_images, i) => {
                    return <a href='#' title={_images.id} onClick={() => {
                        onSelectImage(_images.id);
                    }} >
                        <img
                            key={_images.id}
                            src={require(`../images/thumbnails/${_images.thumbnail}`)} alt="7111-m" width="145" height="121"
                            onClick={() => setIsClicked(_images.id)}
                            style={{
                                border: isClicked === _images.id ? "3px solid red" : "none"
                            }}
                        />
                        <span>{_images.id}</span>
                    </a>
                }
                )}
                <span className={start == 0 ? "previous disabled" : "previous"} title="Previous" onClick={() => { onPrevious(start, end) }}>Previous</span>
                <a href="#" className={data.length <= end ? "next disabled" : "next"} title="Next" onClick={() => {
                    onNext(end)
                }}>Next</a>

            </div>
        </div>

        </>
    )
}
export default ThumbNail;