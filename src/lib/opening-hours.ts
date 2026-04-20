export type DaySlot = { open: number; close: number }; // minutes since midnight

export type WeekSchedule = {
  [day: number]: DaySlot[]; // 0 = Sunday, 1 = Monday, … 6 = Saturday
};

// Mo–Mi: Ruhetag | Do–Sa: 17:30–23:00 | So: 12:00–14:00 & 17:00–21:00
export const SCHEDULE: WeekSchedule = {
  0: [{ open: 720, close: 840 }, { open: 1020, close: 1260 }], // Sunday: 12–14 & 17–21
  1: [],  // Monday — Ruhetag
  2: [],  // Tuesday — Ruhetag
  3: [],  // Wednesday — Ruhetag
  4: [{ open: 1050, close: 1380 }], // Thursday: 17:30–23:00
  5: [{ open: 1050, close: 1380 }], // Friday: 17:30–23:00
  6: [{ open: 1050, close: 1380 }], // Saturday: 17:30–23:00
};

export function checkIsOpen(now: Date = new Date()): boolean {
  const formatter = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";

  const dayMap: Record<string, number> = {
    So: 0, Mo: 1, Di: 2, Mi: 3, Do: 4, Fr: 5, Sa: 6,
  };
  const day = dayMap[get("weekday")] ?? 0;
  const minutes = parseInt(get("hour")) * 60 + parseInt(get("minute"));

  const slots = SCHEDULE[day] ?? [];
  return slots.some((slot) => minutes >= slot.open && minutes < slot.close);
}
