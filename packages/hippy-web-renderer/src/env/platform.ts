const Localization = { country: '', language: '', direction: 0 };
export const platform = () => ({
  OS: __HIPPYNATIVEGLOBAL__.Platform.OS,
  Localization: __HIPPYNATIVEGLOBAL__.Platform.Localization || Localization,
});
