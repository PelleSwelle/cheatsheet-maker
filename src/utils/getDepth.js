const getDepth = (object) => {
    let depth = 0;
    if (object.children) { // if has children
        object.children.forEach((child) => {
            let tempDepth = getDepth(child)
            if (tempDepth > depth) {
                depth = tempDepth
            }
        })
    }
    return 1 + depth
}

export default getDepth;