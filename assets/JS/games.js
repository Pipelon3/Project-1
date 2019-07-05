axios({
    url: "https://api-v3.igdb.com/search",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': "0739afcb5e23f6e503ddabfc22c2827f"
    },
    data: "fields alternative_name,character,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;"
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });