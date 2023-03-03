function ImageShow(props) {
    const {imageDetails} = props;
    const { id, alt_description, urls } = imageDetails;
    return(
        <div key={id}>
            <img src={urls.small} alt={alt_description} />
        </div>
    )
}

export default ImageShow;