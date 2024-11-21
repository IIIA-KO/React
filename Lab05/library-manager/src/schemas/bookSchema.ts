import * as yup from 'yup';

export const addBookSchema = yup.object({
    title: yup
        .string()
        .required('Title is required')
        .min(2, "Title must be at least 2 characters long")
        .max(100, "Title must be at most 100 characters long"),
    author: yup
        .string()
        .required('Author is required')
        .min(2, "Author must be at least 2 characters long")
        .max(100, "Author must be at most 100 characters long"),
});