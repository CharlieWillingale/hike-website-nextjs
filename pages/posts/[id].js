import Showcase from '../../components/showcase';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({postData}) {
    return (

      
      <div>
        <Showcase title={postData.title} />

        <section className='w-11/12 m-auto'>
          <article>
            <p>{postData.routeSampleText}</p>
          </article>
          <br/>
          <Image 
            src={postData.routeImageUrl}
            alt={postData.routeImageAlt}
            width={400}
            height={200}
            className='m-auto'
          />
          <br/>
            <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </div>
    );
}


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

  