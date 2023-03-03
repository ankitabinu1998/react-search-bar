import ImageShow from './ImageShow';
function ImageList (props) {
    const {imageList} = props;
    let imageDetails;
    return(
        <div className='d-flex flex-wrap justify-content-center'>
            {imageList.map(image => {
            imageDetails = (({ id, alt_description, urls }) => ({ id, alt_description, urls }))(image);
            return <ImageShow imageDetails={imageDetails}/>
            })}
        </div>

    )
}

export default ImageList;