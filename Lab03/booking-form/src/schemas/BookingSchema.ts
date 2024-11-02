import * as yup from 'yup';
import { FormValues } from '../types/FormValues';
import { DateFlexibility } from '../constants/DateFlexibility';
import { StayDuration } from '../constants/StayDuration';

export const BookingSchema: yup.ObjectSchema<FormValues> = yup.object({
    destination: yup
        .string()
        .required('Please select a destination'),
    dateType: yup
        .string()
        .oneOf(['calendar', 'flexible'])
        .required(),
    dateRange: yup
        .object({
            from: yup.date().required('Start date is required'),
            to: yup.date().required('End date is required'),
        })
        .nullable()
        .when('dateType', {
            is: 'calendar',
            then: (schema) =>
                schema.required(),
            otherwise: (schema) =>
                schema.notRequired(),
        }),
    dateFlexibility: yup
        .mixed<DateFlexibility>()
        .oneOf(Object.values(DateFlexibility))
        .nullable()
        .default(DateFlexibility.Exact)
        .required(),
    stayDuration: yup
        .mixed<StayDuration>()
        .nullable()
        .default(null)
        .when('dateType', {
            is: 'flexible',
            then: (schema) =>
                schema
                    .oneOf(Object.values(StayDuration))
                    .required('Please select stay duration'),
        }),
    selectedMonths: yup
        .array()
        .of(yup.string())
        .default([])
        .when('dateType', {
            is: 'flexible',
            then: (schema) =>
                schema
                    .min(1, 'Select at least one month')
                    .max(3, 'Cannot select more than three months'),
        }),
    adults: yup
        .number()
        .min(1, 'At least one adult is required')
        .default(1),
    children: yup
        .number()
        .min(0, 'Cannot be negative')
        .default(0),
    rooms: yup
        .number()
        .min(1, 'At least one room is required')
        .default(1),
    hasPets: yup
        .boolean()
        .default(false),
}) as yup.ObjectSchema<FormValues>;