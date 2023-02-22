import IntroContainer from '@/components/container/IntroContainer'
import Section from '@/components/container/Section'
import Gallery from '@/components/container/Gallery'
import Head from 'next/head'
import Image from 'next/image'
import GalleryFood from '@/components/container/GalleryFood'





export default function Home() {
  return (
 <div className='Home'>
  <IntroContainer/>
  <Section key="2" right={true}  img="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg" title={"Restoran Dvor"} desc="Irure et anim enim ad nostrud. Amet id proident sit ipsum. Adipisicing duis magna dolor culpa excepteur consectetur amet laboris mollit aute ad. Occaecat magna reprehenderit culpa pariatur anim veniam quis deserunt laboris culpa proident."/>
   <GalleryFood/>
  <Section key="1" right={false}  img="https://cdn.pixabay.com/photo/2013/08/29/04/41/wine-glasses-176991__340.jpg" title={"Restoran Dvor"} desc="Irure et anim enim ad nostrud. Amet id proident sit ipsum. Adipisicing duis magna dolor culpa excepteur consectetur amet laboris mollit aute ad. Occaecat magna reprehenderit culpa pariatur anim veniam quis deserunt laboris culpa proident."/>
  <Gallery/>
 </div>
  )
}
