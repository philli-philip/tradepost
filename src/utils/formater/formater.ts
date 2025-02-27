export const compactNumberFormat = new Intl.NumberFormat("de-DE", {
  style: "decimal",
  notation: "compact",
  compactDisplay: "short",
});

export const tinyDateFormat = new Intl.DateTimeFormat("de-DE", {
  month: "short",
  year: "2-digit",
});

export const shortDateFormat = new Intl.DateTimeFormat("de-DE", {
  month: "short",
  day: "2-digit",
});

export const hourDateFormat = new Intl.DateTimeFormat("de-DE", {
  hour: "numeric",
  minute: "numeric",
});

export function compactNumber(number: number | undefined) {
  if (!number) {
    return "0";
  }

  return compactNumberFormat.format(number);
}

export function compactDate({
  date,
  format = tinyDateFormat,
}: {
  date: Date | number;
  format?: Intl.DateTimeFormat;
}) {
  return format.format(date);
}
