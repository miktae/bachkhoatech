const Vueapp = Vue.createApp({
  data() {
    return {
      location: window.location.pathname,
      lang: "Language",
      search: "Search",
      home: [
        { name: 'Home', path: './' },
        { name: 'Contact', path: './contact' },
        { name: 'About Us', path: './about-us' },
      ],
      other: [
        { name: 'Home', path: '../' },
        { name: 'Contact', path: '../contact' },
        { name: 'About Us', path: '../about-us' },
      ],
      contents: [
        'Bachkhoatech specializes in consulting and designing automation lines in industry, installing electrical cabinets, transformers, inverters, soft starters.Distributing industrial electrical equipment.',
        'Phone number : 0917.44.88.33',
        'Office: 22 Ta Quang Buu-Bach Khoa -Hai Ba Trung Dist-Ha Noi',
        'Factory: Tay Tuu, Bac Tu Liem, Ha Noi ',
        'Tax code: 0108029131'
      ],
      encontents: [
        'Bachkhoatech specializes in consulting and designing automation lines in industry, installing electrical cabinets, transformers, inverters, soft starters.Distributing industrial electrical equipment.',
        'Phone number : 0917.44.88.33',
        'Office: 22 Ta Quang Buu-Bach Khoa -Hai Ba Trung Dist-Ha Noi',
        'Factory: Tay Tuu, Bac Tu Liem, Ha Noi ',
        'Tax code: 0108029131'
      ],
      vicontents: [
        "Bachkhoatech chuyên tư vấn thiết kế dây chuyền tự động hóa trong công nghiệp, lắp đặt tủ điện, máy biến áp, biến tần, khởi động mềm. Phân phối thiết bị điện công nghiệp.",
        "Mọi chi tiết xin liên hệ : 0917.44.88.33",
        "Văn phòng: 22 Tạ Quang Bửu-Phường Bách Khoa-Hai Bà Trưng-Hà Nội",
        "Xưởng sx: Tây Tựu, Quận Bắc Từ Liêm, Thành phố Hà Nội",
        "MST: 0108029131"
      ],
      kocontents: [
        "Bachkhoatech는 전기 캐비닛, 변압기, 인버터, 소프트 스타터 설치, 산업 자동화 라인 컨설팅 및 설계를 전문으로 합니다. 산업용 전기 장비 유통업체입니다.",
        "전화번호 : 0917.44.88.33",
        "사무실 : 22 Tạ Quang Bửu-Phường Bách Khoa-Hai Bà Trưng-Hà Nội",
        "생산장 : 아시아산업지원센터, 바치클라우드, 서울특별시",
        "세금계산서 : 0108029131"
      ],
    }
  },
  methods: {
    change(variable) {
      this.lang = variable.lang;
      this.search = variable.search;
      this.home = [
        { name: variable.home, path: './' },
        { name: variable.contact, path: './contact' },
        { name: variable.aboutUs, path: './about-us' },
      ];
      this.other = [
        { name: variable.home, path: '../' },
        { name: variable.contact, path: '../contact' },
        { name: variable.aboutUs, path: '../about-us' },
      ];
    },
    changeLanguage(event) {
      // console.log(event.target.value);
      langSelect = event.target.value;
      if (this.location === '/bachkhoatech/') {
        if (event.target.value === 'vi') {
          this.contents = this.vicontents;
          axios.get('./vi.json')
            .then(response => {
              // console.log(response.data);
              this.change(response.data);
            })
            .catch(error => {
              console.log(error);
            })
        }
        else if (event.target.value === 'en-US') {
          this.contents = this.encontents;
          axios.get('./en-US.json')
            .then(response => {
              this.change(response.data);
            })
            .catch(error => {
              console.log(error);
            })
        }
        else {
          this.contents = this.kocontents;
          axios.get('./ko.json')
            .then(response => {
              this.change(response.data);
            })
            .catch(error => {
              console.log(error);
            })
        }
      }
      else {
        if (event.target.value === 'vi') {
          this.contents = this.vicontents;
          axios.get('../vi.json')
            .then(response => {
              this.change(response.data);
            })
            .catch(error => {
              console.log(error);
            })
        }
        else if (event.target.value === 'en-US') {
          this.contents = this.encontents;
          axios.get('../en-US.json')
            .then(response => {
              this.change(response.data);
            })
            .catch(error => {
              console.log(error);
            })
        }
        else {
          this.contents = this.kocontents;
          axios.get('../ko.json')
            .then(response => {
              this.change(response.data);
            })
            .catch(error => {
              console.log(error);
            })
        }
      }
    }
  }
})
  .component('footercomponent', {
    template:
      `<footer>
    <div class="container-fluid">
      <div class="d-flex flex-column align-items-center">
      <p v-for="item in items">{{ item }}</p>
         </div>
    </div>
    <div class="copyright text-center">
      Copyright &copy; 2021 <span>Bachkhoatech</span>
    </div>
  </footer> 
    `,
    props: {
      'items': Array
    }
  })
  .component('contact',{
    template:
    `<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact Form #01</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-10 col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-7 d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Get in touch</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<input type="text" class="form-control" name="name" id="name" placeholder="Name">
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Email">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Send Message" class="btn btn-primary">
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch">
								<div class="info-wrap bg-primary w-100 p-lg-5 p-4">
									<h3 class="mb-4 mt-md-4">Contact us</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="#">yoursite.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    `,
  })
  .component('about', {
    template: `
    <p>About</p>
    `,
  })
  .mount('#app')

  // Fixed navbar
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 