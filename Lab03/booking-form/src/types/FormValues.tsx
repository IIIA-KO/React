import { DateFlexibility } from "../constants/DateFlexibility";
import { StayDuration } from "../constants/StayDuration";

export interface FormValues {
    destination: string;
    dateType: 'calendar' | 'flexible';
    dateRange: {
        from: Date;
        to: Date;
    } | null;
    dateFlexibility: DateFlexibility | null;
    stayDuration?: StayDuration | null;
    selectedMonths: string[];
    adults: number;
    children: number;
    rooms: number;
    hasPets: boolean;
}
