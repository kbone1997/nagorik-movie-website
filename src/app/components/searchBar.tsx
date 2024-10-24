// components/SearchBar.tsx
import { useForm } from 'react-hook-form';

const SearchBar = ({ setSearchQuery }: any) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        setSearchQuery(data.search);
        console.log(data.search)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex border-4 border-red-500 items-center justify-center gap-2">
            <input
                type="text"
                placeholder="Search for movies..."
                {...register('search')}
                className="w-[40%] h-[50px] rounded-[14px] pl-4 text-black"
            />
            <button className='bg-orange-400' type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
