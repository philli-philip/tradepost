export const compactNumberFormat = new Intl.NumberFormat("de-DE", {
  style: "decimal",
  notation: "compact",
  compactDisplay: "short",
});
export const compactGoldFormat = new Intl.NumberFormat("de-DE", {
  style: "unit",
  notation: "compact",
  compactDisplay: "short",
  unit: "gram",
});

export const tinyDateFormat = new Intl.DateTimeFormat("de-DE", {
  month: "short",
  year: "numeric",
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
export function compactGold(number: number | undefined) {
  if (!number) {
    return "0";
  }

  return compactGoldFormat.format(number);
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
