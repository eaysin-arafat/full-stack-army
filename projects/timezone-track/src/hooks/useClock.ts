/* eslint-disable @typescript-eslint/no-explicit-any */
import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

interface Clock {
  id: string;
  title: string;
  timezone: Timezone;
  utc_date: any;
  date: any;
}
interface Timezone {
  type: string;
  offset: number;
}

const initialState: Clock = {
  id: "",
  title: "",
  timezone: {
    type: "",
    offset: 0,
  },
  utc_date: "",
  date: "",
};

const TIMEZONE_OFFSET: { [key: string]: number } = {
  LOCALE: new Date().getTimezoneOffset(),
  PST: -7 * 60,
  EST: -4 * 60,
  GST: 4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

const useClock = (timezone?: string, offset?: number) => {
  const [state, setState] = useState<Clock>(initialState);

  useEffect(() => {
    const d = new Date();

    const utcDate = addMinutes(d, d.getTimezoneOffset());
    const effectiveOffset = offset ?? TIMEZONE_OFFSET[timezone] ?? 0;
    const date =
      timezone === "" ? new Date() : addMinutes(utcDate, effectiveOffset);

    setState({
      ...state,
      timezone: {
        type: timezone ?? "LOCALE",
        offset: effectiveOffset,
      },
      utc_date: utcDate,
      date: date,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timezone, offset]);

  return { clock: state };
};

export default useClock;
