import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
