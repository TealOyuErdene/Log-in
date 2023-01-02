function Card(){
    return (
        <div class="container">
	<div class="front side">
		<div class="content">
			<h1>Hakkam Abdullah</h1>
			<p>I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience
			</p>
		</div>
	</div>
	<div class="back side">
		<div class="content">
			<h1>Contact Me</h1>
			<form>
				<label>Your Name :</label>
				<input type="text" placeholder="OyuErdene"/>
				<label>Your E-mail :</label>
				<input type="text" placeholder="Example@mail.com"/>
				<label>Your message :</label>
				<textarea placeholder="The Subject"></textarea>
				<input type="submit" value="Done"/>
			</form>
		</div>
	</div>

</div>
    )
}

export default Card