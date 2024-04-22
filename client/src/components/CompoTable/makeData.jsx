const datacc = () => {
    fetch('http://localhost:8000/players')
    .then(response => response.json())
    .then(teams => {
        teams.forEach(team => {
            data.push(team);
        });
    });
}

datacc()

export const data = [];