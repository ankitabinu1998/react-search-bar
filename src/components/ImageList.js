import ImageShow from './ImageShow';
function ImageList (props) {
    const {imageList} = props;
    let imageDetails;
    return(
        imageList.map(image => {
            imageDetails = (({ id, alt_description, urls }) => ({ id, alt_description, urls }))(image);
            return <ImageShow imageDetails={imageDetails}/>
        })
    )
}

export default ImageList;