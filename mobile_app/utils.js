export const setValue = (name, value, setter) => (
  setter(prev => ({...prev, [name]: value }))
)

export const setMultiValues = (object, setter) => {
  setter(prev => ({ ...prev, ...object }))
}
