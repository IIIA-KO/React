import { Control, Controller } from 'react-hook-form';
import { City } from '../../types/City';
import { FormValues } from '../../types/FormValues';

interface Props {
    control: Control<FormValues>;
    cities: City[];
    errors: any;
}

export const DestinationSelect: React.FC<Props> = ({ control, cities, errors }) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
            Destination
        </label>
        <Controller
            name="destination"
            control={control}
            render={({ field }) => (
                <select
                    {...field}
                    className={`w-full p-2 border rounded-md ${errors.destination ? 'border-red-500' : ''
                        }`}
                >
                    <option value="">Select destination</option>
                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}, {city.country}
                        </option>
                    ))}
                </select>
            )}
        />
        {errors.destination && (
            <p className="text-red-500 text-sm">{errors.destination.message}</p>
        )}
    </div>
);