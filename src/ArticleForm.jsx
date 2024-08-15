import PropTypes from 'prop-types';
import { Form, Header } from 'semantic-ui-react';

const ArticleForm = ({ formValues, setFormValues }) => {
  const handleChange = (e, { name, value }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Form>
      <Header as="h4" style={{ marginTop: '20px', marginBottom: '10px' }}>
        What do you want to ask or share?
      </Header>
      <Form.Input
        label="Title"
        placeholder="Enter a descriptive title"
        style={{ marginBottom: '15px' }}
        name="title"
        value={formValues.title}
        onChange={handleChange}
      />
      <Form.TextArea
        label="Abstract"
        placeholder="Enter a 1-paragraph abstract"
        style={{ marginBottom: '15px' }}
        name="abstract"
        value={formValues.abstract}
        onChange={handleChange}
      />
      <Form.TextArea
        label="Article Text"
        placeholder="Enter your article"
        style={{ marginBottom: '15px', height: '150px' }}
        rows={10}
        name="articleText"
        value={formValues.articleText}
        onChange={handleChange}
      />
      <Form.Input
        label="Tags"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
        style={{ marginBottom: '15px' }}
        name="tags"
        value={formValues.tags}
        onChange={handleChange}
      />
    </Form>
  );
};

ArticleForm.propTypes = {
  formValues: PropTypes.shape({
    title: PropTypes.string,
    abstract: PropTypes.string,
    articleText: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  setFormValues: PropTypes.func.isRequired,
};

export default ArticleForm;
