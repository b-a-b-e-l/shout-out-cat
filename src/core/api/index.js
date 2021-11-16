const fetchData = () => fetch('https://opensheet.vercel.app/124kEA4HsZhu5nAV9xQ1iq-0ob9GqFwHU72JYHDSlY2o/shoutout')
    .then(response => response.json())

export default fetchData