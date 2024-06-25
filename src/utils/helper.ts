export const getInitials = (text: string) => {
  const nameParts = text.split(" ");
  const firstCharacterFirstString = nameParts[0].charAt(0);
  const lastStringIndex = nameParts.length - 1;
  const firstCharacterLastString = nameParts[lastStringIndex].charAt(0);
  const joinedChar =
    `${firstCharacterFirstString}${firstCharacterLastString}`.toUpperCase();
  return joinedChar;
};
