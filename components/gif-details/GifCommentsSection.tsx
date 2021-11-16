import { FormEventHandler, useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CommentType } from '../../models/models';

const GifCommentsSection = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const { darkMode } = useContext(ThemeContext);
  const userInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (userInputRef.current?.value.trim() === '') {
      alert('New comment must not be empty');
      return;
    }

    const date = new Date();
    setComments(
      comments.concat({
        id: Math.random().toString(),
        text: userInputRef.current!.value.trim(),
        date: date.toLocaleTimeString() + ' ' + date.toLocaleDateString(),
      })
    );
    userInputRef.current!.value = '';
  };

  return (
    <div className='comment-section'>
      <h2>Comments</h2>

      <form
        onSubmit={submitFormHandler}
        className={`comment-section__form ${
          darkMode ? 'comment-section__form--dark' : ''
        }`}
      >
        <textarea ref={userInputRef} placeholder='Add a new comment!' />
        <button type='submit'>Add comment</button>
      </form>

      {comments.length > 0 && (
        <ul
          className={`comment-section__list ${
            darkMode ? 'comment-section__list--dark' : ''
          }`}
        >
          {comments.map((comment) => (
            <li key={comment.id}>
              <span>{comment.date}</span>
              <span>{comment.text} </span>
            </li>
          ))}
        </ul>
      )}
      {comments.length === 0 && <p>No comments yet...</p>}
    </div>
  );
};

export default GifCommentsSection;
