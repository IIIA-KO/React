import { Control, Controller } from 'react-hook-form';
import { FormValues } from '../../types/FormValues';

interface Props {
    control: Control<FormValues>;
    name: keyof Pick<FormValues, 'adults' | 'children' | 'rooms'>;
    errors: any;
}

export const GuestCounter: React.FC<Props> = ({ control, name, errors }) => (
    <div className="flex items-center justify-between">
        <label className="capitalize text-sm font-medium text-gray-700">
            {name}
        </label>
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        className="px-3 py-1 border rounded-md"
                        onClick={() =>
                            onChange(
                                Math.max(
                                    name === 'children' ? 0 : 1,
                                    (value as number) - 1
                                )
                            )
                        }
                    >
                        -
                    </button>
                    <span>{value as number}</span>
                    <button
                        type="button"
                        className="px-3 py-1 border rounded-md"
                        onClick={() => onChange((value as number) + 1)}
                    >
                        +
                    </button>
                </div>
            )}
        />
        {errors[name] && (
            <p className="text-red-500 text-sm">{errors[name]?.message}</p>
        )}
    </div>
);