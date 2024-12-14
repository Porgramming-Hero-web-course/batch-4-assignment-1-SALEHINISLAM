{
    //solving problem 6
    type Profile = {
        name: string;
        age: number;
        email: string;
      };
      
      function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
      }
      
      // Sample Input
      const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
      const updatedProfile = updateProfile(myProfile, { age: 26 ,name:"Salehin"});
      
      // Sample Output
      console.log(updatedProfile);  
}