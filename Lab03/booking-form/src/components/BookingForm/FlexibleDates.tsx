import { Control, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { FormValues } from '../../types/FormValues';

interface Props {
    control: Control<FormValues>;
    errors: any;
}

export const FlexibleDates: React.FC<Props> = ({ control, errors }) => {
    const generateAvailableMonths = () => {
        const months = [];
        const currentDate = new Date();
        for (let i = 0; i < 12; i++) {
            const date = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + i,
                1
            );
            months.push({
                value: format(date, 'yyyy-MM'),
                label: format(date, 'MMMM yyyy'),
            });
        }
        return months;
    };

    return (
        <div className="space-y-4">
            <Controller
                name="stayDuration"
                control={control}
                render={({ field }) => (
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            How long do you want to stay?
                        </label>
                        <div className="space-y-2">
                            {['weekend', 'week', 'month', 'other'].map((value) => (
                                <label
                                    key={value}
                                    className="flex items-center space-x-2"
                                >
                                    <input
                                        type="radio"
                                        {...field}
                                        value={value}
                                        checked={field.value === value}
                                    />
                                    <span className="capitalize">{value}</span>
                                </label>
                            ))}
                        </div>
                        {errors.stayDuration && (
                            <p className="text-red-500 text-sm">
                                {errors.stayDuration.message}
                            </p>
                        )}
                    </div>
                )}
            />

            <Controller
                name="selectedMonths"
                control={control}
                render={({ field }) => (
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Select up to 3 months
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {generateAvailableMonths().map((month) => (
                                <button
                                    key={month.value}
                                    type="button"
                                    className={`p-2 rounded-md ${field.value?.includes(month.value)
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200'
                                        }`}
                                    onClick={() => {
                                        const current = field.value || [];
                                        if (current.includes(month.value)) {
                                            field.onChange(
                                                current.filter((m) => m !== month.value)
                                            );
                                        } else if (current.length < 3) {
                                            field.onChange([...current, month.value]);
                                        }
                                    }}
                                    disabled={
                                        !field.value?.includes(month.value) &&
                                        field.value?.length >= 3
                                    }
                                >
                                    {month.label}
                                </button>
                            ))}
                        </div>
                        {errors.selectedMonths && (
                            <p className="text-red-500 text-sm">
                                {errors.selectedMonths.message}
                            </p>
                        )}
                    </div>
                )}
            />
        </div>
    );
};