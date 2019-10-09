export const fetchData = async (searchparm) => {
    const url = " https://vast-shore-74260.herokuapp.com/banks";
    
    const headers = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      };
    
    try {   
      let response = await fetch(url+searchparm);
      let data = await response.json();
      return data;
    } catch (e) {
        return e
    }
  };