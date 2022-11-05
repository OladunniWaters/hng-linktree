import Profile from "./Profile"
import Button from "./Button"
import Footer from "./Footer"


export default function Homepage() {
  return (
    <div className="container-fluid App">
       <Profile />
       <Button />
       <Footer />
    </div>
  );
}