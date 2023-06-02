import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ThumbNail from '../components/thumbnail';
import LargeImage from '../components/largeimage';

const baseURL = 'http://localhost:4200/images/list'
const FilmStrip = () => {
    const [data, setData] = useState(null)
    const [imageId, setImageId] = useState(null)
    const [end, setEnd] = useState(4)
    const [start, setStart] = useState(0)


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, [])
    const onSelectImage = (data) => {
        setImageId(data)
    }
    const onNext = (data) => {
        setEnd(end + 4)
        setStart(start + 4)
        setImageId(null)
    }
    const onPrevious = (start, end) => {
        setStart(start - 4)
        setEnd(end - 4)
        setImageId(null)
    }

    return (
        <div id="main" role="main">
            {data && <LargeImage data={data} imageId={imageId} start={start} />}
            {data && <ThumbNail data={data} onSelectImage={onSelectImage} start={start} end={end} onNext={onNext} onPrevious={onPrevious} imageId={imageId} />}
        </div>
    )
}

export default FilmStrip;