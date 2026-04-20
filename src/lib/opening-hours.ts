export type DaySlot = { open: number; close: number }; // minutes since midnight

export type WeekSchedule = {
  [day: number]: DaySlot[]; // 0 = Sunday, 1 = Monday, … 6 = Saturday
};

// Mo, Mi–So: 12:00–14:00 & 18:00–22:00 | Di: Geschlossen
export const SCHEDULE: WeekSchedule = {
  0: [{ open: 720, close: 840 }, { open: 1080, close: 1320 }], // Sunday:    12–14 & 18–22
  1: [{ open: 720, close: 840 }, { open: 1080, close: 1320 }], // Monday:    12–14 & 18–22
  2: [],                                                          // Tuesday  — Geschlossen
  3: [{ open: 720, close: 840 }, { open: 1080, close: 1320 }], // Wednesday: 12–14 & 18–22
  4: [{ open: 720, close: 840 }, { open: 1080, close: 1320 }], // Thursday:  12–14 & 18–22
  5: [{ open: 720, close: 840 }, { open: 1080, close: 1320 }], // Friday:    12–14 & 18–22
  6: [{ open: 720, close: 840 }, { open: 1080, close: 1320 }], // Saturday:  12–14 & 18–22
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

  // Some environments return "Mo." with a trailing period — strip it
  const weekday = get("weekday").replace(/\.$/, "");
  const day = dayMap[weekday];

  // If day is unresolvable, default to closed rather than a wrong schedule
  if (day === undefined) return false;

  const minutes = parseInt(get("hour")) * 60 + parseInt(get("minute"));
  const slots = SCHEDULE[day] ?? [];
  return slots.some((slot) => minutes >= slot.open && minutes < slot.close);
}
