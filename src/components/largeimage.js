import React from 'react';



const LargeImage=({data, imageId, start})=>{

	const _largeImageData =imageId ? data.filter((item)=>item.id===imageId)[0] : data[start]
	
    return(
        <>
         {_largeImageData && <div id="large">
			 <div className="group">
				<img src={require(`../images/large/${_largeImageData?.image}`)} alt="Large Image" width="430" height="360" />
				<div className="details">
					<p><strong>Title</strong> {_largeImageData?.title}</p>
					<p><strong>Description</strong> {_largeImageData?.description}</p>
					<p><strong>Cost</strong> {_largeImageData?.cost}</p>
					<p><strong>ID #</strong> {_largeImageData?.id}</p>
					<p><strong>Thumbnail File</strong> {_largeImageData?.thumbnail}</p>
					<p><strong>Large Image File</strong> {_largeImageData?.image}</p>
				</div>
			</div>
		</div>}
        </>
    )}
export default LargeImage;