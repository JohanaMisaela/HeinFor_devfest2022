import React, {useEffect} from 'react'
import Navbar from '../../layouts/admins/Navbar'
import PostItem from './../../components/admins/postItem';
import AddPost from './../../components/admins/addPost';
import * as AOS from 'aos';

function Dashboard() {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div>
      <div>
      <Navbar />
      <AddPost />
      <div data-aos="fade-up">
      <PostItem />
      </div>
      <section class="light">
	<div class="container py-2">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Publications</div>

		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">Type de publication</a></h1>
				<div class="postcard__subtitle small">
					<span>Nom de la personne</span> <br/>
          <span>personne@gmail.com</span>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
        <div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<ul class="postcard__tagbox">
          <li class="tag__item play blue">
						<a href="#"><i class="fas fa-play mr-2"></i>J'aime</a>
					</li>
					<li class="tag__item">
            <a href="#">
              <i  className="fa-thin fa-comments mr-2"></i>Commentaire
            </a>
            </li>
				</ul>
        
			</div>
		</article>
	
	</div>
</section>
    </div>
    </div>
  )
}

export default Dashboard;
