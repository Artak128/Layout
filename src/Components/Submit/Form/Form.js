function Form() {
    return(
        <form action="" method="post" acceptCharset="utf-8" id="form1">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" required/>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" id="email" placeholder="Enter your email" required/>
        <label htmlFor="">Detail</label>
        <textarea name="detail" id="detail" placeholder="Enter your message" required></textarea>
        <input type="submit" value="Submit"/>
       </form>
    )
}

export default Form