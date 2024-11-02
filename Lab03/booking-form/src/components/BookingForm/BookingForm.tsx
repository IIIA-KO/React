import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BookingSchema } from '../../schemas/BookingSchema';
import { City } from '../../types/City';
import { FormValues } from '../../types/FormValues';
import { DestinationSelect } from './DestinationSelect';
import { DateTypeSelector } from './DateTypeSelector';
import { CalendarDates } from './CalendarDates';
import { FlexibleDates } from './FlexibleDates';
import { GuestCounter } from './GuestCounter';

const BookingForm: React.FC = () => {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const [cities, setCities] = useState<City[]>([]);

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        trigger
    } = useForm<FormValues>({
        resolver: yupResolver(BookingSchema),
        defaultValues: {
            dateType: 'calendar',
            adults: 1,
            children: 0,
            rooms: 1,
            hasPets: false,
            dateFlexibility: null,
            selectedMonths: [],
        },
    });

    const dateType = watch('dateType');

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/9a002e24-002f-412c-951a-0d88960e376e');
                const data = await response.json();
                setCities(data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, [setValue, trigger]);

    useEffect(() => {
        if (dateType === 'calendar') {
            setValue('dateRange', {
                from: dateRange.startDate,
                to: dateRange.endDate
            });
            trigger('dateRange');
        }
    }, [dateRange, dateType, setValue, trigger]);

    const handleSelect = (ranges: any) => {
        setDateRange({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
        });
    };

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted with data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4 space-y-6">
            <DestinationSelect
                control={control}
                cities={cities}
                errors={errors}
            />

            <div className="space-y-2">
                <DateTypeSelector
                    dateType={dateType}
                    setValue={setValue}
                    trigger={trigger}
                />

                {dateType === 'calendar' ? (
                    <CalendarDates
                        control={control}
                        dateRange={dateRange}
                        handleSelect={handleSelect}
                        errors={errors}
                    />
                ) : (
                    <FlexibleDates
                        control={control}
                        errors={errors}
                    />
                )}
            </div>

            <div className="space-y-4">
                {['adults', 'children', 'rooms'].map((field) => (
                    <GuestCounter
                        key={field}
                        control={control}
                        name={field as keyof Pick<FormValues, 'adults' | 'children' | 'rooms'>}
                        errors={errors}
                    />
                ))}

                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                        Traveling with pets?
                    </label>
                    <Controller
                        name="hasPets"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => onChange(e.target.checked)}
                                className="h-4 w-4"
                            />
                        )}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    );
};

export default BookingForm;