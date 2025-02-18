import { useEffect, useState } from "react";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import moment from "moment";
import { CALENDAR_EVENT_STYLE } from "./util";

const THEME_BG: Record<string, string> = CALENDAR_EVENT_STYLE;

type Event = {
  title: string;
  startTime: string;
  theme: string;
};

type CalendarViewProps = {
  calendarEvents: Event[];
  addNewEvent: (date?: Date) => void;
  openDayDetail: (details: { filteredEvents: Event[]; title: string }) => void;
};

function CalendarView({
  calendarEvents,
  addNewEvent,
  openDayDetail,
}: CalendarViewProps) {
  const today = moment().startOf("day");
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    moment().startOf("month")
  );
  const [events, setEvents] = useState<Event[]>([]);
  const [currMonth, setCurrMonth] = useState(() =>
    moment(today).format("MMM-yyyy")
  );

  useEffect(() => {
    setEvents(calendarEvents);
  }, [calendarEvents]);

  const allDaysInMonth = (): Date[] => {
    let start = moment(firstDayOfMonth).startOf("week");
    let end = moment(firstDayOfMonth).endOf("month").endOf("week");
    let days: Date[] = [];
    let day = start.clone();
    while (day.isSameOrBefore(end, "day")) {
      days.push(day.toDate());
      day.add(1, "day");
    }
    return days;
  };

  const getEventsForCurrentDate = (date: Date): Event[] => {
    let filteredEvents = events.filter((e) =>
      moment(date).isSame(moment(e.startTime), "day")
    );
    if (filteredEvents.length > 2) {
      let originalLength = filteredEvents.length;
      filteredEvents = filteredEvents.slice(0, 2);
      filteredEvents.push({
        title: `${originalLength - 2} more`,
        theme: "MORE",
        startTime: "",
      });
    }
    return filteredEvents;
  };

  const openAllEventsDetail = (date: Date, theme: string) => {
    if (theme !== "MORE") return;
    let filteredEvents = events.filter((e) =>
      moment(date).isSame(moment(e.startTime), "day")
    );
    openDayDetail({ filteredEvents, title: moment(date).format("D MMM YYYY") });
  };

  const isToday = (date: Date): boolean => moment(date).isSame(moment(), "day");

  const isDifferentMonth = (date: Date): boolean =>
    moment(date).month() !== moment(firstDayOfMonth).month();

  const getPrevMonth = () => {
    const firstDayOfPrevMonth = moment(firstDayOfMonth)
      .subtract(1, "month")
      .startOf("month");
    setFirstDayOfMonth(firstDayOfPrevMonth);
    setCurrMonth(moment(firstDayOfPrevMonth).format("MMM-yyyy"));
  };

  const getCurrentMonth = () => {
    const firstDayOfCurrMonth = moment().startOf("month");
    setFirstDayOfMonth(firstDayOfCurrMonth);
    setCurrMonth(moment(firstDayOfCurrMonth).format("MMM-yyyy"));
  };

  const getNextMonth = () => {
    const firstDayOfNextMonth = moment(firstDayOfMonth)
      .add(1, "month")
      .startOf("month");
    setFirstDayOfMonth(firstDayOfNextMonth);
    setCurrMonth(moment(firstDayOfNextMonth).format("MMM-yyyy"));
  };

  return (
    <div className="w-full bg-base-100 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 sm:gap-4">
          <p className="font-semibold text-xl w-48">
            {moment(firstDayOfMonth).format("MMMM yyyy")} <span className="text-xs ml-2">Beta</span>
          </p>
          <button type="button" title="tl" className="btn btn-square btn-sm btn-ghost" onClick={getPrevMonth}>
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button type="button" title="tl" className="btn btn-sm btn-ghost normal-case" onClick={getCurrentMonth}>Current Month</button>
          <button type="button" title="tl" className="btn btn-square btn-sm btn-ghost" onClick={getNextMonth}>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
        <button type="button" title="tl" className="btn btn-sm btn-ghost btn-outline normal-case" onClick={() => addNewEvent()}>Add New Event</button>
      </div>
      <div className="my-4 divider" />
      <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
        {weekdays.map((day, key) => (
          <div className="text-xs capitalize" key={key}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-1 place-items-center">
        {allDaysInMonth().map((day, idx) => (
          <div key={idx} className={colStartClasses[moment(day).day()] + " border w-full h-28"}>
            <p className={`inline-block flex items-center justify-center h-8 w-8 rounded-full mx-1 mt-1 text-sm cursor-pointer hover:bg-base-300 ${isToday(day) ? "bg-blue-100 dark:bg-blue-400" : ""} ${isDifferentMonth(day) ? "text-slate-400 dark:text-slate-600" : ""}`} onClick={() => addNewEvent(day)}>
              {moment(day).format("D")}
            </p>
            {getEventsForCurrentDate(day).map((e, k) => (
              <p key={k} onClick={() => openAllEventsDetail(day, e.theme)} className={`text-xs px-2 mt-1 truncate ${THEME_BG[e.theme] || ""}`}>{e.title}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
