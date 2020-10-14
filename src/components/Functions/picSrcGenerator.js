//This function generates pic src for material's UI Avatar
const picSrcGenerator = () => {
    return `http://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 5000)}.svg`
}
export default picSrcGenerator
