const temp = () => {
    const test = initializeApp(firebaseConfig);
    const storage = getStorage();


    const [image, setImage] = useState(null);

    // 이미지 파일 선택 핸들러
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    // 이미지 업로드 핸들러




    const handleImageUpload = async () => {
        if (image) {
            const storageRef = ref(storage, image.name)
            // 이 위에건 결국 안쓰나?

            const imagesRef = ref(storage, `images/${image.name}`);

            // 이미지 파일 업로드
            try {
                const data = await uploadBytes(imagesRef, image)
            } catch (err) {
                console.error('뭔가 에러', err)
            }

            let url;

            try {


                url = await getDownloadURL(imagesRef)
            }
            catch (err) {
                console.log('이쪽도 뭔가 에러')
            }
            console.log(url)


        } else {
            console.error('이미지를 선택하세요.');
        }
    };






    return <>
        {/* 이번 프로젝트 최대 고민, 이걸 컴포넌트화 할 수 없을까? */}


        <h1>Firebase Storage Image Upload</h1>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
    </>
}

export default temp