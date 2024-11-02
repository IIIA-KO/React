import { Control, Controller } from 'react-hook-form';
import { DateRange } from 'react-date-range';
import { DateFlexibility } from '../../constants/DateFlexibility';
import { FormValues } from '../../types/FormValues';

interface Props {
    control: Control<FormValues>;
    dateRange: { startDate: Date; endDate: Date; key: string };
    handleSelect: (ranges: any) => void;
    errors: any;
}

export const CalendarDates: React.FC<Props> = ({
    control,
    dateRange,
    handleSelect,
    errors,
}) => {
    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
                Select Dates
            </label>
            <Controller
                name="dateRange"
                control={control}
                render={() => (
                    <div>
                        <DateRange
                            ranges={[dateRange]}
                            onChange={handleSelect}
                            moveRangeOnFirstSelection={false}
                            rangeColors={['#3b82f6']}
                            minDate={new Date()}
                            months={2}
                            direction="horizontal" />
                        {errors.dateRange && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.dateRange.message}
                            </p>
                        )}
                    </div>
                )} />

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Date Flexibility
                </label>
                <Controller
                    name="dateFlexibility"
                    control={control}
                    render={({ field }) => (
                        <div>
                            <div className="flex space-x-2 mt-2">
                                <label className="flex items-center space-x-1">
                                    <input
                                        type="radio"
                                        {...field}
                                        value={DateFlexibility.Exact}
                                        checked={field.value === DateFlexibility.Exact} />
                                    <span>Exact Dates</span>
                                </label>
                                {[1, 2, 3, 7].map((days) => (
                                    <label key={days} className="flex items-center space-x-1">
                                        <input
                                            type="radio"
                                            {...field}
                                            value={`${days}day` as DateFlexibility}
                                            checked={field.value === `${days}day`} />
                                        <span>±{days} days</span>
                                    </label>
                                ))}
                            </div>
                            {errors.dateFlexibility && (
                                <p className="text-red-500 text-sm mt-1">
                                    Please select date flexibility
                                </p>
                            )}
                        </div>
                    )} />
            </div>
        </div>
    );
};