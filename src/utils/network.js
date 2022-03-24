/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */
 export const getApiResource = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log("could not fetch", res.status);
        return false;
      }
      return await res.json();
    } catch (error) {
      console.warn("could not fetch", error.message);
      return false;
    }
  };
  
  
  // (async ()=> {
  // const body = await getApiResource(API_ROOT + API_PEOPLE);
  // console.log(body)
  // })()