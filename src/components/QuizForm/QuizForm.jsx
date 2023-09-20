import { Formik, Field } from 'formik';
import { StyledForm, StyledError, Label } from './QuizForm.styled';
import * as Yup from 'yup';

const QuizSchema = Yup.object().shape({
  topic: Yup.string().min(3, 'Too Short!').required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
  time: Yup.number()
    .min(5, 'At least 3 min')
    .max(60, 'At most 60 min')
    .positive('Must be positive')
    .required('Required'),
  questions: Yup.number()
    .min(3, 'At least 3 questions')
    .max(100, 'At most 100 questions')
    .positive('Must be positive')
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        level: 'beginner',
        time: 0,
        questions: 0,
      }}
      validationSchema={QuizSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Quiz topic
          <Field name="topic" type="text" />
          <StyledError name="topic" component="div" />
        </Label>
        <Label>
          Level
          <Field as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Field>
          <StyledError name="level" component="div" />
        </Label>
        <Label>
          Time
          <Field name="time" type="number" />
          <StyledError name="time" component="div" />
        </Label>
        <Label>
          Questions
          <Field name="questions" type="number" />
          <StyledError name="questions" component="div" />
        </Label>

        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
