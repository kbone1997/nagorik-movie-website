// components/SearchBar.tsx
import { useForm } from 'react-hook-form';

const SearchBar = ({ setSearchQuery }: any) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        setSearchQuery(data.search);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-bar">
            <input
                type="text"
                placeholder="Search for movies..."
                {...register('search')}
                className="input"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
