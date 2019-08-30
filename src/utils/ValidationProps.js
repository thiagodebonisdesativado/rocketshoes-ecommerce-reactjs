export const checkThemeName = (
  Themes,
  propObjValue,
  funcName,
  componentName
) => {
  if (Themes[propObjValue.theme] === undefined) {
    return new Error(
      `Invalid Theme Name "${propObjValue.theme}", supplied to "${componentName}". Validation Failed!`
    );
  }
};
