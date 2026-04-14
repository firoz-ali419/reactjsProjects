import conf from "./config/conf";

function App() {

console.log(conf.appwriteUrl);
console.log(conf.appwriteProjectId);
console.log(conf.appwriteDatabaseId);
console.log(conf.appwriteCollectionId);
console.log(conf.appwriteBucketId);

  return (
    <>
   <h1>App write blog app</h1>
    </>
  )
}

export default App
