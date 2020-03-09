export const getClassName = (classObject: object) => {
  const stringClass = classObject.toString();
  const className = stringClass.substring(6, stringClass.length - 3);

  return className;
};
