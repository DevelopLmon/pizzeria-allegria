export type DaySlot = { open: number; close: number }; // minutes since midnight

export type WeekSchedule = {
  [day: number]: DaySlot[]; // 0 = Sunday, 1 = Monday, … 6 = Saturday
};

// Mo–So: 12:00–14:00 & 19:00–22:00 | Dienstag (2): Ruhetag
export const SCHEDULE: WeekSchedule = {
  0: [{ open: 720, close: 840 }, { open: 1140, close: 1320 }], // Sunday
  1: [{ open: 720, close: 840 }, { open: 1140, close: 1320 }], // Monday
  2: [],                                                          // Tuesday — closed
  3: [{ open: 720, close: 840 }, { open: 1140, close: 1320 }], // Wednesday
  4: [{ open: 720, close: 840 }, { open: 1140, close: 1320 }], // Thursday
  5: [{ open: 720, close: 840 }, { open: 1140, close: 1320 }], // Friday
  6: [{ open: 720, close: 840 }, { open: 1140, close: 1320 }], // Saturday
};

export function checkIsOpen(now: Date = new Date()): boolean {
  // Always evaluate against German local time (CET/CEST), regardless of visitor timezone
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
