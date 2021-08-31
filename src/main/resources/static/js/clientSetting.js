$(function() {
	// ---START ADDING EVENT LISTENER---

	// GET Request to authorize Password
	$("#changeProfileOauthOK").on("click", function() {
		checkpasswd($("#inputMethod").text());
	});

	// Show Change-Profile Form from Selection
	$(".select-change-profile-container").on("click", function() {
		showProfile("changeProfile");
	});

	// Show Change-Password Form from Selection
	$(".select-change-passwd-container").on("click", function() {
		showProfile("changePassword");
	});

	// Back to Selection From Password OAuth Page
	$("#changeProfileOauthCancel").on("click", function() {
		hideErrorMessage();
		let newContainer = $(".setting-select-container");
		let oldContainer = $(".change-profile-oauth-container");
		switchPages(oldContainer, newContainer);
	});

	// Post Request to Change Client Profile
	$("#input-submit").on("click", function() {
		changeProfileSubmit();
	});

	// Back to Selection From Changing Profile Form
	$("#changeProfileCancel").on("click", function() {
		hideErrorMessage();
		let oldContainer = $(".change-profile-form-container");
		let newContainer = $(".setting-select-container");
		switchPages(oldContainer, newContainer);
	});

	// Change Password submit btn
	$("#changePasswdSubmitbtn").on("click", function() {
		changePasswordMethod();
	});
	
	// Back to Selection From Change Password Page
	$("#changePasswdCancelbtn").on("click", function() {
		hideErrorMessage();
		let newContainer = $(".setting-select-container");
		let oldContainer = $(".change-passwd-form-container");
		switchPages(oldContainer, newContainer);
	});



// ---END ADDING EVENT LISTENER---
});



// GET Request to authorize Password
function checkpasswd(method) {
	let passwd = {
			"password": $("#passwd").val()
		};
	let urlPath =
		"http://localhost:8080/FinalProject/api/v1/member/auth";
	$.ajax({
		url: urlPath,
		method: 'POST',
		dataType: 'json',
		data: passwd,
	}).done(function(response) {
		passwdSuccess(JSON.parse(JSON.stringify(response)), method);
	}).fail(function(error) {
		fail("密碼錯誤");
	})
	
}

function passwdSuccess(response, method) {
	if (response === "Fail") {
		fail("密碼錯誤");
	} else {
		if (method === "changeProfile") {
			
			showProfileForm(response);
		} else {
			// TODO
			hideErrorMessage();
			let oldContainer = $('.change-profile-oauth-container');
			let newContainer = $('.change-passwd-form-container');
			switchPages(oldContainer, newContainer);
		}
	}
}
// Show Error Message
function fail(err) {
	let errorNode = $(".change-profile-result-container");
	let imgNode = $("#change-profile-result-img");
	let spanNode = $("#change-profile-result-span");
	imgNode.attr("src", "/FinalProject/images/wrong.png");
	spanNode.text(err).css("color", "red");
	errorNode.css("visibility", "visible");
}

// Hide Error Message
function hideErrorMessage() {
	let errorNode = $(".change-profile-result-container");
	errorNode.css("visibility", "hidden");
}

// Show Profile From After Login
function showProfileForm(data) {
	let fullName = $("input[name='fullname']");
	let clientEmail = $("input[name='clientemail']");
	let phone = $("input[name='phone']");
	let city = $("select[name='city']");
	let town = $("input[name='town']");
	let fullAddress = $("input[name='fulladdress']");
	fullName.val(data.fullName);
	clientEmail.val(data.username);
	phone.val(data.phone);
	city.val(data.city);
	town.val(data.town);
	fullAddress.val(data.fullAddress);
	hideErrorMessage();
	let oldContainer = $(".change-profile-oauth-container");
	let newContainer = $(".change-profile-form-container");
	switchPages(oldContainer, newContainer);
}

// Get Cookie Value by Name
function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
}

// From Selection to Password Authorize with Method Name
function showProfile(methodName) {
	$("#inputMethod").text(methodName);
	hideErrorMessage();
	let newContainer = $(".change-profile-oauth-container");
	let oldContainer = $(".setting-select-container");
	switchPages(oldContainer, newContainer);
}

// Send POST Request to Change Client Profile
function changeProfileSubmit() {

	let fullName = $("input[name='fullname']").val();
	let phone = $("input[name='phone']").val();
	let city = $("select[name='city']").val();
	let town = $("input[name='town']").val();
	let fullAddress = $("input[name='fulladdress']").val();

	let url = "http://localhost:8080/FinalProject/api/v1/member/update";
	let data = {
		fullName: fullName,
		phone: phone,
		city: city,
		town: town,
		fullAddress: fullAddress
	};

	fetch(url, {
		method: "PUT",
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: new Headers({
			"Content-Type": "application/json",
		}),
	})
		.then((res) => res.text())
		.catch((error) => console.error("Error:", error))
		.then(() => showSuccessMessage());
}

// Show Success Message
function showSuccessMessage() {
	let errorNode = $(".change-profile-result-container");
	let imgNode = $("#change-profile-result-img");
	let spanNode = $("#change-profile-result-span");
	imgNode.attr("src", "/FinalProject/images/correct.png");
	spanNode.text("成功").css("color", "green");
	errorNode.css("visibility", "visible");
}

// Switching Pages
function switchPages(oldPage, newPage) {
	oldPage.css("display", "none");
	newPage.css("display", "block");
}

// Change Password 
function changePasswordMethod() {
	let passwdInput = $('#changedpasswd').val();
	let url = 'http://localhost:8080/FinalProject/api/v1/member/update';
	let data = {
		password: passwdInput
	}
	fetch(url, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: new Headers({
			"Content-Type": "application/json",
		}),
	}).then((response) => response.text())
	.then(function(res) {
			if (res == 'ok') {
				$(".change-passwd-form-container").css("display", "none");
				showSuccessMessage();
			} else {
				console.log(res);
				fail('更改失敗');
			}
		})
		.catch((err) => console.log(err))
}