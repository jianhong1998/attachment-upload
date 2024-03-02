import axios from 'axios';
import { ChangeEventHandler, useState } from 'react';
import { BACKEND_URL } from './constants';

function App() {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const selectedFile = e.target.files;

        if (selectedFile?.length) {
            setFile(selectedFile[0]);
        }
    };

    const getUploadLink = async (fileName: string, fileType: string) => {
        const query = new URLSearchParams({
            fileName,
            fileType,
        });

        const response = await axios.get<{ url: string }>(
            `${BACKEND_URL}/attachment/url?${query}`,
        );

        return response.data.url;
    };

    const onClickHandler = async () => {
        try {
            if (!file) return;

            setIsLoading(true);

            const url = await getUploadLink(file.name, file.type);

            console.log({ url });

            if (!url) return;

            const response = await axios.put(url, file, {
                headers: {
                    'Content-Type': file.type,
                },
            });

            console.log(response);

            setFile(null);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <input type="file" onChange={onInputChange} />
            <button onClick={onClickHandler}>Upload</button>
            {isLoading && <h1>Loading...</h1>}
        </>
    );
}

export default App;
