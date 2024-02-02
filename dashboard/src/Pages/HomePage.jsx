import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Button from '../Components/CircularLoader';

export const HomePage = () => {

    const [file, setFile] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function uploadFile() {
        if (file === '') return
        setIsLoading(true);
        // setTimeout(() => setIsLoading(false), 2000);
    }
    return (
        <div className='home-page'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="upload-part">
                <div className="navbar">
                    <div className="left-side">
                        <span>Upload CSV</span>
                    </div>
                    <div className="right-side">
                        <div className="bell-icon">
                            <img src="assets/icons/Bell.png" alt="" />
                        </div>
                        <div className="user-icon">
                            <img src="assets/icons/User.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className="upload-box">
                    <div className="upload-inner-box">
                        <div className="upload">
                            <div className="upload-icon">
                                <img src="assets/icons/excel.png" alt="" />
                            </div>
                            <div className="upload-text">
                                {file === '' ? (<>
                                    <span className='drop-excel'>Drop your excel sheet here or </span>
                                    <label htmlFor="file">
                                        <span className='browse'>
                                            Browse
                                        </span>
                                        <input type="file" name="file" id="file" accept='.csv' hidden onChange={(e) => setFile(e.target.files[0])} />
                                    </label>
                                </>) : (
                                    <div className='file-selected'>
                                        <span className='drop-excel'>{file.name}</span>
                                        <span className='remove' onClick={() => setFile('')}>Remove</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="upload-button">
                        <button>
                            <Button loading={isLoading} uploadFile={uploadFile} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
