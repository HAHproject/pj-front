import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";
import classes from "../../../styles/mainPage/mainBoard.module.css"
const MainBoard = () => {
    const [videoPlayStatus, setVideoPlayStatus] = useState([]);
    const videoRefs = useRef([]);
    const nav = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태를 관리
    const [content, setContent] = useState(""); // 게시글 내용 상태
    const [attachment, setAttachment] = useState(null); // 첨부 파일 상태
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false); // State for reply input visibility
    const isLogin = useSelector(state => state.loginCheck.loginInfo);
    const [boardData, setBoardData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/board')
            .then((response) => {
                console.log(response.data);
                setBoardData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const videoPlayStatusCopy = [...videoPlayStatus];
            videoRefs.current.forEach((videoRef, index) => {
                if (videoRef == null || videoRef.getBoundingClientRect() == null) {
                    return ;
                }
                const rect = videoRef.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (!videoPlayStatusCopy[index]) {
                        videoRef.muted = true;
                        videoRef.play();
                        videoPlayStatusCopy[index] = true;
                    }
                } else {
                    if (videoPlayStatusCopy[index]) {
                        videoRef.pause();
                        videoPlayStatusCopy[index] = false;
                    }
                }
            });

            setVideoPlayStatus(videoPlayStatusCopy);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [videoPlayStatus]);

    const createBoard = () => {
        // createBoard 메소드 실행 시 모달 열기
        setIsModalOpen(true);
    };

    const closeModal = () => {
        // 모달 닫기
        setIsModalOpen(false);
    };

    const openCommentModal = () => {
        setIsCommentModalOpen(true);
    };

    const closeCommentModal = () => {
        setIsCommentModalOpen(false);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleAttachmentChange = (e) => {
        const file = e.target.files[0];
        setAttachment(file);
    };
    const handleSubmit = () => {
        // 게시글 내용과 첨부 파일 제출 처리
        console.log("게시글 내용:", content);
        console.log("첨부 파일:", attachment);
        debugger
        closeModal();
    };

    const openReplyInput = () => {
        setShowReplyInput(!showReplyInput);
    };

    return (
        <div className={classes.storyBoardWrap}>
            <div className={classes.createBoard}>
                <div onClick={createBoard} className={classes.plus}>
                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"
                         className="x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj xxk0z11 xvy4d1p">
                        <path d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"></path>
                    </svg>
                </div>
                <div className={classes.createMessage}>
                    <h2>게시글 만들기</h2>
                    <p>사진을 공유하거나 글을 남겨보세요.</p>
                </div>
            </div>
            {boardData.map((item, idx) => (
                <div key={idx} className={classes.createBoard2}>
                    <div className={classes.titleWrap}>
                        <h2 className={classes.suggestion}>추천 게시물</h2>
                    </div>
                    <div className={classes.flexStyle}>
                        <div>
                            <img loading="lazy" className={classes.img} />
                        </div>
                        <div>
                            <h2>{item.user.userName}</h2>
                            <p>{item.user.createdAt}</p>
                        </div>
                    </div>
                    <div className={classes.description}>
                        <p>{item.contents}</p>
                    </div>
                    <div className={classes.videoArea}>
                        <img loading="lazy"  />
                    </div>
                    <div className={classes.likeArea}>
                        <div className={classes.likeAreaLeft}>
                            <div className={classes.likeFlex}>
                                <span>1,245</span>
                                <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/like.svg?alt=media&token=57793a04-e2df-4f9c-abe5-2445f83e4a57" />
                            </div>
                        </div>
                        <div className={classes.likeAreaRight}>
                            <div className={classes.likeFlex}>
                                <span>1,245</span>
                                <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/bookmark.png?alt=media&token=bd0b81ce-e724-47a7-9556-75a48130dc3d" />
                            </div>
                            <div className={classes.comentFlex} onClick={openCommentModal}>
                                <span>2,345</span>
                                <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/coment%20(1).png?alt=media&token=525ce0da-4368-4d4c-82d1-e170845a6cc9" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {isModalOpen && (
                <div className={classes.modalOverlay}>
                    <div className={classes.modalContent}>
                        <h3>게시글 작성</h3>
                        <textarea
                            value={content}
                            onChange={handleContentChange}
                            placeholder="게시글 내용을 입력하세요"
                        />
                        <input
                            type="file"
                            accept="image/*, video/*"
                            onChange={handleAttachmentChange}
                        />
                        <button onClick={handleSubmit}>작성</button>
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            )}

            {/*댓글*/}
            {isCommentModalOpen && (
                <div className={classes.commentModalOverlay}>
                    <div className={classes.commentModalContent}>
                        <h3 className={classes.commentModalTitle}>Comments</h3>
                        <div className={classes.commentsContainer}>
                            {/* Comment */}
                            <div className={classes.commentWrap}>
                                <div className={classes.comment}>
                                    <div className={classes.commentHeader}>
                                        <p className={classes.commentAuthor}>김정수</p>
                                        <button onClick={openReplyInput} className={classes.replyButton}>답글쓰기</button>
                                    </div>
                                    <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                                        <p className={classes.commentText}>스쿼드 진짜 구리다</p>
                                        <div className={classes.commentActions}>
                                            {/* Like button */}
                                            <button style={{display : 'flex', alignItems : 'center'}}  className={classes.likeButton}>
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/my-cdn-d39b2.appspot.com/o/like.svg?alt=media&token=57793a04-e2df-4f9c-abe5-2445f83e4a57"
                                                    alt="Like"
                                                />
                                                <span>123</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                {/* Reply */}
                                <div className={classes.reply}>
                                    <div className={classes.commentHeader}>
                                        <p className={classes.commentAuthor}>채오성</p>
                                    </div>
                                    <p className={classes.commentText}>너보단 나을 듯?</p>
                                </div>
                                <div className={classes.reply}>
                                    <div className={classes.commentHeader}>
                                        <p className={classes.commentAuthor}>박성무</p>
                                    </div>
                                    <p className={classes.commentText}>그러게요</p>
                                </div>
                                {/* Reply Input */}
                                {showReplyInput && (
                                    <div className={classes.replyInput}>
                                        <input
                                            type="text"
                                            placeholder="당신의 의견을 적어 주세요."
                                            className={classes.replyInputField}
                                        />
                                        <button className={classes.replySubmitButton}>등록</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={classes.commentForm}>
        <textarea
            className={classes.commentTextarea}
            placeholder="Add a comment"
        ></textarea>
                            <button className={classes.commentSubmitButton}>댓글쓰기</button>
                        </div>
                        <button className={classes.closeButton} onClick={closeCommentModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainBoard