import fetcher from "./fetcher";

const userAPI = {
   getUsers: (keyword) => {
      return fetcher.get("Users/getUser", {
         params: {
            keyword: keyword,
         },
      });
   },
};

export default userAPI;
