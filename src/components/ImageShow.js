function ImageShow(props) {
    const {imageDetails} = props;
    const { alt_description, urls } = imageDetails;
    return(
        <div className='m-3'>
            <img src={urls.small} alt={alt_description} />
        </div>
    )
}

export default ImageShow;