import { UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import { FormValues } from '../../types/FormValues';

interface Props {
    dateType: string;
    setValue: UseFormSetValue<FormValues>;
    trigger: UseFormTrigger<FormValues>;
}

export const DateTypeSelector: React.FC<Props> = ({ dateType, setValue, trigger }) => {
    const handleCalendarSelect = () => {
        setValue('dateType', 'calendar');
        setValue('stayDuration', null);
        setValue('selectedMonths', []);
        trigger(['dateType', 'dateRange', 'dateFlexibility']);
    };

    const handleFlexibleSelect = () => {
        setValue('dateType', 'flexible');
        setValue('dateRange', null);
        setValue('dateFlexibility', null);
        trigger(['dateType', 'stayDuration', 'selectedMonths']);
    };

    return (
        <div className="flex space-x-4">
            <button
                type="button"
                onClick={handleCalendarSelect}
                className={`px-4 py-2 rounded-md ${dateType === 'calendar' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
            >
                Calendar
            </button>
            <button
                type="button"
                onClick={handleFlexibleSelect}
                className={`px-4 py-2 rounded-md ${dateType === 'flexible' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
            >
                Flexible Dates
            </button>
        </div>
    );
};