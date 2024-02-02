

const Button = ({ loading, uploadFile }) => {
    console.log('loading', loading)
    return (

        <>
            {
                loading ? (
                    <div className={`circular-loader ${loading ? 'visible' : 'hidden'}`}>
                        <div className="spinner"></div>
                    </div>
                ) : (<div className="upload-button" onClick={uploadFile}>
                    <img src="assets/icons/upload.png" alt="" />
                    <span >Upload</span>
                </div>)
            }
        </>
    );
};

export default Button;
