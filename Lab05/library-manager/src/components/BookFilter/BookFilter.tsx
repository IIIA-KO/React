import { useEffect, useState } from "react";
import { IBookFilterProps } from "./IBookFilterProps";
import { useDebounce } from "../../hooks/useDebounce";

export const BoolFilter = ({ onFilterChange }: IBookFilterProps) => {
    const [filter, setFilter] = useState('');
    const debouncedFilter = useDebounce(filter, 500);

    useEffect(() => {
        onFilterChange(debouncedFilter);
    }, [debouncedFilter, onFilterChange]);

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Books search..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full p-2 border rounded"
            />
        </div>
    )
}