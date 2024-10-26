// components/SearchBar.tsx
import { useForm } from 'react-hook-form';

const SearchBar = ({ setSearchQuery }: any) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        setSearchQuery(data.search);
        console.log(data.search)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center gap-2 pt-[2%]">
            <input
                type="text"
                placeholder="Search for movies..."
                {...register('search')}
                className="w-[40%] h-[50px] rounded-[14px] pl-4 text-black"
            />
            <button className='bg-orange-400 px-4 h-[50px] rounded-[14px] hover:bg-orange-700' type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
