function canFinish(numCourses, prerequisites) {
    let graph = Array(numCourses).fill(0).map(() => [])
    let inDegree = Array(numCourses).fill(0)
    let q = []

    for (let[course, prereq] of prerequisites){
        graph[prereq].push(course)
        inDegree[course] += 1
    }

    for (let course = 0; course< numCourses; course++){
        if(inDegree[course] === 0) q.push(course)
    }

    while (q.length){
        let prereq = q.shift()
        numCourses -= 1
        for(let course of graph[prereq]){
            inDegree[course] -= 1
            if(inDegree[course] === 0) q.push(course)
        }
    }

    return numCourses === 0
}

canFinish(2, [[1,0]])