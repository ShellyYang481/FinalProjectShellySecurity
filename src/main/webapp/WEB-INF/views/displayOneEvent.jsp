<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<title>活動</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<!-- Bootstrap core JS-->
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="../js/template.js"></script>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

<link rel="icon" type="image/x-icon" href="../images/favicon.ico" />

<!-- Bootstrap 4 message board js-->
<script
	src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"
	integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
	crossorigin="anonymous"></script>

<!-- Font Awesome icons (free version)-->
<script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
	crossorigin="anonymous"></script>
<!-- Google fonts-->
<link href="https://fonts.googleapis.com/css?family=Varela+Round"
	rel="stylesheet" />
<link
	href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="../css/index.css" rel="stylesheet" />

<!-- Bootstrap 4 message board css-->
<link rel="stylesheet"
	href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous">

<style>
.news_li {
	color: white;
	list-style-type: none;
	text-align: left;
}

#title_li {
	font-size: 20px;
}

#seemore_btn {
	background-color: black;
	color: white;
	border: none;
}

.msg_title {
	color: white;
}
</style>
</head>
<body id="page-top">
	<!-- Navigation-->
	<nav
		class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
		id="mainNav">
		<div class="container px-4 px-lg-5">
			<a class="navbar-brand" href="/FinalProject/"><img
				src="/FinalProject/images/audi-logo.png" alt="logo" /></a>
			<button class="navbar-toggler navbar-toggler-right" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
				aria-controls="navbarResponsive" aria-expanded="false"
				aria-label="Toggle navigation">
				Menu <i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item"><a class="nav-link"
						href="/FinalProject/TestDrive">試駕體驗</a></li>
					<li class="nav-item"><a class="nav-link"
						href="/FinalProject/News">最新消息</a></li>
					<li class="nav-item"><a class="nav-link" href="#signup">了解車型</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="/FinalProject/Events">活動</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="#signup">精品商城</a>
					</li>
					<li class="nav-item"><a class="nav-link" href="#signup">展示中心</a>
					</li>
					<li class="nav-item"><a class="nav-link"
						href="/FinalProject/account">會員專區</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- 以上不要動 -->
	<!-- 這裡開始加你們的東西 -->
	<!-- About -->
	<section class="about-section text-center">
		<div class="container px-4 px-lg-5">
			<div class="row gx-4 gx-lg-5 justify-content-center">
				<div class="col-lg-8">
					<h2 class="text-white mb-4">活動</h2>
					<p class="text-white-50">
					<div id="container">


						<ul id="user_eventlist">

						</ul>
					</div>

				</div>
			</div>
			<img class="img-fluid" src="../images/audi-etron.png" alt="..." />
	</section>

	<!-- 以下不要動 -->
	<!-- Footer-->
	<footer class="footer bg-black small text-center text-white-50">
		<div class="container px-4 px-lg-5">Copyright &copy; 資策會第五組專題報告
			2021</div>
	</footer>


</body>
<script>
    //display details of the selected news
    $(document).ready(function () {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const event_id = urlParams.get('event_id');
      $.ajax({
        url: "/FinalProject/findEventById/" + event_id,
        method: "GET",
        dataType: "json",
        success: function (data) {
          var list = "";
          list += "<li class='news_li'><h2>" + data.event_uploaddate + "</h2></li><li class='news_li'><h1>"
            + data.event_title + "</h1></li></br><li class='news_li'><img src='data:image/png;base64,"
            + data.event_img + "' width='563' height='350' alt='pic cannot be displayed'/></li></br><li class='news_li'>"
            + data.event_subtitle + "</li></br><li class='news_li'>"
            + data.event_content + "<h5>活動日期：" + data.event_date + "</h5><h5>報名期間：" + data.reserve_start_date +"-" + data.reserve_end_date + "</h5><h5>活動地點: " + data.location + "</h5></li></br></br><a href='/FinalProject/Events/BookEvent?event_id=" + event_id +"'>點我報名</a></br></br></br></br>";
          $("#user_eventlist").html(list);
        },
        error: function (err) {
          alert(err)
        }
      });

    });

  </script>
</html>