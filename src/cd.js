export const cd = (new_dir) => {
    try {
        process.chdir(new_dir)
    } catch(error) {
        console.log(error.message)
    }
}