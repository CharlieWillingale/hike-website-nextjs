import Showcase from '../../components/showcase';
import Carousel from '../../components/carousel';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({postData}) {
  
  const firstWordPos = postData.routeSampleText.split(' ')[0].length
  
  return (

      
      <div>
        <Showcase title={postData.title}/>
        <section className='w-11/12 m-auto'>
          <article>
            <p><span className='text-main-orange'>{postData.routeSampleText.slice(0,firstWordPos)}</span>{postData.routeSampleText.slice(firstWordPos)}</p>
            <p className='my-3'>Skip to the <Link href='#downloads'><a className='font-bold decoration-solid text-main-orange'>gpx</a></Link></p>
          </article>
          <br/>
          <Carousel carouselList={postData.routeCarousel}/>
          <br/>
          <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <article id='downloads' className='my-10'>
            <h3 className='text-xl'>Downloads</h3>
          </article>
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

  