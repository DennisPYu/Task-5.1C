import { useState } from 'react';
import './App.css';
import { Container, Dropdown, Button } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [postType, setPostType] = useState('question');
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    tags: '',
    articleText: '',
    abstract: '',
  });

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  const handleSubmit = () => {
    setFormValues({
      title: '',
      description: '',
      tags: '',
      articleText: '',
      abstract: '',
    });

    toast.success('Post created', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  };

  return (
    <div className="app-container">
      <div className="custom-header">New Post Page</div>
      <Container className="content-container">
        <div className="header-subtext">Select Post Type</div>
        <Dropdown
          placeholder="Select Post Type"
          selection
          options={[
            { key: 'question', text: 'Question', value: 'question' },
            { key: 'article', text: 'Article', value: 'article' },
          ]}
          value={postType}
          onChange={handlePostTypeChange}
          className="dropdown"
        />
        {postType === 'question' ? (
          <QuestionForm formValues={formValues} setFormValues={setFormValues} />
        ) : (
          <ArticleForm formValues={formValues} setFormValues={setFormValues} />
        )}
        <Button primary className="submit-button" onClick={handleSubmit}>
          Post
        </Button>
      </Container>
      <ToastContainer
      />
    </div>
  );
};

export default App;
