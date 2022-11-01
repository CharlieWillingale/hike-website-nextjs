export function getImageRoute() {
    if (process.env.NODE_ENV === 'development') {
        
        return ''

    } else {
        
        return process.env.prod_filepath

    }

} 

