// posts will be populated at build time by getStaticProps()
function Blog({ near2 }) {


  return (
    <>
    <li>{near2}</li>
    <audio controls>
      <source src="http://127.0.0.1:5002/api/tts?text='Kato yalina ente zange'" />
    </audio>
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://34.132.72.167:5002/api/tts?text="Kato yalina ente zange"`)
  const posts = await res.blob()
  console.log(typeof res)
  console.log(posts.size)
  console.log(posts.type)
  const arrayBuffer = await posts.arrayBuffer();
  console.log(arrayBuffer.byteLength);
  const chars = new Uint8Array(arrayBuffer);
  console.log(chars)
  const near = "ne"
  var binary = '';
  var len = posts.size;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( chars[ i ] );
  }
  console.log(btoa(binary))
  const near2 = btoa(binary)
  // const near = await URL.createObjectURL(posts)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      near2,
    },
  }
}

export default Blog