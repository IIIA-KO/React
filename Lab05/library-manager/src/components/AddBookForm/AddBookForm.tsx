import { yupResolver } from "@hookform/resolvers/yup";
import { addBookSchema } from "../../schemas/bookSchema";
import { useForm } from "react-hook-form";
import { useAddBookMutation } from "../../store/api";

export const AddBookForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(addBookSchema),
        defaultValues: {
            title: '',
            author: '',
        }
    });

    const [addBook] = useAddBookMutation();

    const onSubmit = (data: any) => {
        addBook({ ...data, rating: 0, isRead: false });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
            <div className="flex gap-4">
                <input
                    {...register('title')}
                    type="text"
                    placeholder="Book title"
                    className="border p-2 flex-1"
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                <input
                    {...register('author')}
                    type="text"
                    placeholder="Author"
                    className="border p-2 flex-1"
                />
                {errors.author && <p className="text-red-500">{errors.author.message}</p>}
                <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded">
                    Add Book
                </button>
            </div>
        </form>
    );
}