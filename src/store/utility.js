export const updateObject = (oldobject, updatedproperties) => {
  return {
    ...oldobject,
    ...updatedproperties,
  };
};
