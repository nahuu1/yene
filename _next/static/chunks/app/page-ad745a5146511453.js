(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1999:function(e,s,a){Promise.resolve().then(a.bind(a,1692))},1692:function(e,s,a){"use strict";a.r(s);var t=a(7437),r=a(29),n=a.n(r),d=a(2265);s.default=function(){let[e,s]=d.useState("home"),[a,r]=d.useState(!1),[o,l]=d.useState(null),[i,c]=d.useState(""),[f,m]=d.useState(""),[x,u]=d.useState([]),[h,j]=d.useState([]),[b,p]=d.useState([{id:1,name:"Pappardelle",price:39,description:"With Vegetables",image:"https://ucarecdn.com/7c876d2a-d10d-4f99-9326-de7ba8a407a3/-/format/auto/"},{id:2,name:"Ravioli Stuffed",price:35,description:"With Pasta Sauce",image:"https://ucarecdn.com/d5fa443d-91e5-426e-98d9-6052b5267f2c/-/format/auto/"},{id:3,name:"Pappardelle",price:39,description:"With Vegetables",image:"https://ucarecdn.com/f820d997-dfde-4ff8-8329-203c6684e659/-/format/auto/"},{id:4,name:"Ravioli Stuffed",price:35,description:"With Pasta Sauce",image:"https://ucarecdn.com/74890733-f9e5-4c99-88ce-fdaa5696d570/-/format/auto/"}]),[g,N]=d.useState([]),[v,y]=d.useState("en"),[w,k]=d.useState("delivery"),[C,S]=d.useState(null),[I,L]=d.useState(""),[z,E]=d.useState(null),P=e=>{j([...h,e])};d.useEffect(()=>{"delivery"===w&&("geolocation"in navigator?navigator.geolocation.getCurrentPosition(e=>{S({latitude:e.coords.latitude,longitude:e.coords.longitude})},e=>{console.error("Error getting user location:",e)}):console.error("Geolocation is not supported by this browser."))},[w]);let[T,A]=d.useState(!1),[O,M]=d.useState(""),[Y,_]=d.useState([]),B=(e,s)=>{let a=e.target.files[0];if(a){let e=new FileReader;e.onload=e=>{let a=[...Y];a[s].image=e.target.result,_(a)},e.readAsDataURL(a)}};return(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 font-sans min-h-screen bg-white text-black flex flex-col",children:[(0,t.jsx)("nav",{className:"jsx-e4f8d862052fe656 bg-white text-black p-4 sticky top-0 z-50 border-b border-gray-200",children:(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 container mx-auto flex justify-between items-center",children:[(0,t.jsx)("h1",{className:"jsx-e4f8d862052fe656 text-2xl font-bold text-red-500",children:"Yene"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex items-center space-x-4",children:[(0,t.jsx)("button",{onClick:()=>s("home"),className:"jsx-e4f8d862052fe656 hover:text-red-500 transition-colors duration-300",children:"en"===v?"Home":"መነሻ"}),(0,t.jsx)("button",{onClick:()=>s("menu"),className:"jsx-e4f8d862052fe656 hover:text-red-500 transition-colors duration-300",children:"en"===v?"Menu":"ምግብ ዝርዝር"}),(0,t.jsx)("button",{onClick:()=>{s("home"),setTimeout(()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})},100)},className:"jsx-e4f8d862052fe656 hover:text-red-500 transition-colors duration-300",children:"en"===v?"About Us":"ስለ እኛ"}),(0,t.jsx)("button",{onClick:()=>{s("home"),setTimeout(()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})},100)},className:"jsx-e4f8d862052fe656 hover:text-red-500 transition-colors duration-300",children:"en"===v?"Contact":"አግኙን"}),(0,t.jsxs)("button",{onClick:()=>s("cart"),className:"jsx-e4f8d862052fe656 relative",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"jsx-e4f8d862052fe656 h-6 w-6",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",className:"jsx-e4f8d862052fe656"})}),h.length>0&&(0,t.jsx)("span",{className:"jsx-e4f8d862052fe656 absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs",children:h.length})]}),(0,t.jsx)("button",{onClick:()=>y("en"===v?"am":"en"),className:"jsx-e4f8d862052fe656 hover:text-red-500 transition-colors duration-300",children:"en"===v?"አማርኛ":"English"})]})]})}),(0,t.jsxs)("main",{className:"jsx-e4f8d862052fe656 container mx-auto mt-8 p-4 flex-grow",children:["home"===e&&(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex flex-col md:flex-row justify-between items-center mb-16",children:[(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 md:w-1/2 mb-8 md:mb-0",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-5xl font-bold mb-4",children:"en"===v?"it's not just Food, It's an Experience.":"ምግብ ብቻ አይደለም፣ ልዩ ተሞክሮ ነው።"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex space-x-4 mb-4",children:[(0,t.jsx)("button",{onClick:()=>s("menu"),className:"jsx-e4f8d862052fe656 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300",children:"en"===v?"View Menu":"ምግብ ዝርዝር"}),(0,t.jsx)("button",{onClick:()=>r(!0),className:"jsx-e4f8d862052fe656 border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300",children:"en"===v?"Book a Table":"ጠረጴዛ ይያዙ"})]}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex items-center space-x-2",children:[(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 flex -space-x-2",children:[1,2,3,4].map(e=>(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 w-8 h-8 rounded-full bg-gray-300 border-2 border-white"},e))}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex items-center",children:[(0,t.jsx)("span",{className:"jsx-e4f8d862052fe656 text-yellow-400",children:"★★★★★"}),(0,t.jsx)("span",{className:"jsx-e4f8d862052fe656 ml-1",children:"4.8"})]})]})]}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 md:w-1/2 relative",children:[(0,t.jsx)("img",{src:b[0].image,alt:"Featured dish",className:"jsx-e4f8d862052fe656 w-full h-auto rounded-full animate-very-slow-spin"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 absolute top-0 right-0 bg-white rounded-full p-2 shadow-md",children:[(0,t.jsx)("span",{className:"jsx-e4f8d862052fe656 text-red-500 font-bold",children:"5%"}),(0,t.jsx)("span",{className:"jsx-e4f8d862052fe656 text-xs block",children:"Discount"})]})]})]}),(0,t.jsxs)("div",{id:"about",className:"jsx-e4f8d862052fe656 mb-16 flex items-center",children:[(0,t.jsx)("img",{src:"https://ucarecdn.com/d5fa443d-91e5-426e-98d9-6052b5267f2c/-/format/auto/",alt:"Kitfo dish",className:"jsx-e4f8d862052fe656 w-1/3 h-auto rounded-full animate-very-slow-spin mr-8"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-3xl font-bold mb-4",children:"en"===v?"About Us":"ስለ እኛ"}),(0,t.jsx)("p",{className:"jsx-e4f8d862052fe656 mb-4",children:"en"===v?"Yene is a premier restaurant offering a unique dining experience with a blend of traditional and modern Ethiopian cuisine. Our passion for food and commitment to quality ingredients sets us apart in the culinary world.":"የኔ ሬስቶራንት የባህላዊና ዘመናዊ የኢትዮጵያ ምግቦችን በማዋሃድ ልዩ የምግብ ተሞክሮ የሚሰጥ ቀዳሚ ሬስቶራንት ነው። ለምግብ ያለን ፍቅርና ለጥራት ያለን ቁርጠኝነት በምግብ ዓለም ከሌሎች ለይቶናል።"}),(0,t.jsx)("p",{className:"jsx-e4f8d862052fe656",children:"en"===v?"Founded in 2020, we've quickly become a favorite spot for food enthusiasts in Addis Ababa. Our team of expert chefs creates dishes that not only satisfy your taste buds but also tell a story of our rich culinary heritage.":"በ2020 ተመስርተን በአጭር ጊዜ ውስጥ በአዲስ አበባ ለምግብ ወዳዶች ተወዳጅ ቦታ ሆነናል። የሰለጠኑ ሼፎቻችን ቡድን የጣዕም ስሜትዎን የሚያረካና የሀብታም የምግብ ባህላችንን ታሪክ የሚያወሩ ምግቦችን ይፈጥራሉ።"})]})]}),(0,t.jsxs)("div",{id:"contact",className:"jsx-e4f8d862052fe656 mb-16",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-3xl font-bold mb-4",children:"en"===v?"Contact Us":"አግኙን"}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656 mb-2",children:["en"===v?"Phone:":"ስልክ:"," 0935344627"]}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656 mb-4",children:["en"===v?"Email:":"ኢሜይል:"," info@yene.com"]}),(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 h-64 w-full",children:(0,t.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126080.79556495815!2d38.68873755000001!3d8.9806034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1649795012090!5m2!1sen!2sus",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",className:"jsx-e4f8d862052fe656"})})]})]}),"menu"===e&&(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-3xl font-bold mb-4",children:"en"===v?"Our Menu":"የምግብ ዝርዝራችን"}),(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:b.map(e=>(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",children:[(0,t.jsx)("img",{src:e.image,alt:e.name,className:"jsx-e4f8d862052fe656 w-full h-48 object-cover rounded-md mb-4"}),(0,t.jsx)("h3",{className:"jsx-e4f8d862052fe656 text-xl font-bold",children:e.name}),(0,t.jsx)("p",{className:"jsx-e4f8d862052fe656 text-gray-600 mb-2",children:e.description}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex justify-between items-center",children:[(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656 font-bold",children:[e.price.toFixed(2)," birr"]}),(0,t.jsx)("button",{onClick:()=>P(e),className:"jsx-e4f8d862052fe656 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-300",children:(0,t.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"jsx-e4f8d862052fe656 w-6 h-6 text-red-500",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6",className:"jsx-e4f8d862052fe656"})})})]})]},e.id))})]}),"cart"===e&&(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-3xl font-bold mb-4",children:"en"===v?"Your Cart":"የእርስዎ ጋሪ"}),h.map((e,s)=>(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 bg-white p-4 mb-4 rounded-lg shadow-md flex justify-between items-center",children:[(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h3",{className:"jsx-e4f8d862052fe656 font-bold",children:e.name}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:[e.price.toFixed(2)," birr"]})]}),(0,t.jsx)("button",{onClick:()=>j(h.filter((e,a)=>a!==s)),className:"jsx-e4f8d862052fe656 text-red-500 hover:text-red-700",children:"en"===v?"Remove":"አስወግድ"})]},s)),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 mt-4",children:[(0,t.jsx)("label",{className:"jsx-e4f8d862052fe656 block mb-2",children:"en"===v?"Order Type:":"የትዕዛዝ አይነት:"}),(0,t.jsxs)("select",{value:w,onChange:e=>k(e.target.value),className:"jsx-e4f8d862052fe656 border p-2 rounded-md w-full md:w-auto",children:[(0,t.jsx)("option",{value:"delivery",className:"jsx-e4f8d862052fe656",children:"en"===v?"Delivery":"ማድረስ"}),(0,t.jsx)("option",{value:"dine-in",className:"jsx-e4f8d862052fe656",children:"en"===v?"Dine-in":"በሬስቶራንት ውስጥ መብላት"})]})]}),(0,t.jsx)("button",{onClick:()=>{if("delivery"===w&&!C){alert("en"===v?"Please allow location access for delivery orders.":"እባክዎ ለማድረስ ትዕዛዞች የአካባቢ መዳረሻን ይፍቀዱ።");return}let e={id:g.length+1,items:h,status:"Preparing",type:w,userLocation:"delivery"===w?C:null,driverLocation:null};N([...g,e]),j([]),s("thankYou")},className:"jsx-e4f8d862052fe656 mt-4 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300",children:"en"===v?"Place Order":"ትዕዛዝ አስገባ"})]}),"thankYou"===e&&(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 text-center",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-4xl font-bold mb-4 animate-fadeIn",children:"en"===v?"Thank You for Your Order!":"ለትዕዛዝዎ እናመሰግናለን!"}),(0,t.jsx)("p",{className:"jsx-e4f8d862052fe656 mb-4 animate-fadeIn",children:"en"===v?"Your order has been placed successfully.":"ትዕዛዝዎ በተሳካ ሁኔታ ተقብሏል።"}),(0,t.jsx)("p",{className:"jsx-e4f8d862052fe656 mb-4 animate-fadeIn",children:"en"===v?"Your order ID is: ".concat(g[g.length-1].id):"የትዕዛዝ መለያ ቁጥርዎ: ".concat(g[g.length-1].id)}),(0,t.jsx)("button",{onClick:()=>s("home"),className:"jsx-e4f8d862052fe656 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300",children:"en"===v?"Back to Home":"ወደ መነሻ ገጽ ይመለሱ"})]}),"admin"===e&&(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656",children:T?(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-3xl font-bold mb-4",children:"Admin Panel"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 mb-8",children:[(0,t.jsx)("h3",{className:"jsx-e4f8d862052fe656 text-2xl font-bold mb-4",children:"Edit Menu"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[Y.map((e,s)=>(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 bg-white p-4 rounded-lg shadow-md",children:[(0,t.jsx)("input",{type:"text",value:e.name,onChange:e=>{let a=[...Y];a[s].name=e.target.value,_(a)},className:"jsx-e4f8d862052fe656 w-full mb-2 p-2 border rounded"}),(0,t.jsx)("input",{type:"number",value:e.price,onChange:e=>{let a=[...Y];a[s].price=parseFloat(e.target.value),_(a)},className:"jsx-e4f8d862052fe656 w-full mb-2 p-2 border rounded"}),(0,t.jsx)("textarea",{value:e.description,onChange:e=>{let a=[...Y];a[s].description=e.target.value,_(a)},className:"jsx-e4f8d862052fe656 w-full mb-2 p-2 border rounded"}),(0,t.jsx)("input",{type:"file",accept:"image/*",onChange:e=>B(e,s),className:"jsx-e4f8d862052fe656 w-full mb-2 p-2 border rounded"}),(0,t.jsx)("img",{src:e.image,alt:e.name,className:"jsx-e4f8d862052fe656 w-full h-32 object-cover rounded-md mb-2"}),(0,t.jsx)("button",{onClick:()=>{_(Y.filter((e,a)=>a!==s))},className:"jsx-e4f8d862052fe656 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-2",children:"Remove Item"})]},e.id)),(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 bg-white p-4 rounded-lg shadow-md flex items-center justify-center",children:(0,t.jsx)("button",{onClick:()=>{let e={id:Y.length+1,name:"New Item",price:0,description:"Description",image:"https://via.placeholder.com/150"};_([...Y,e])},className:"jsx-e4f8d862052fe656 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300",children:"Add New Item"})})]}),(0,t.jsx)("button",{onClick:()=>{p([...Y]),alert("Changes saved successfully!")},className:"jsx-e4f8d862052fe656 mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300",children:"Save Changes"})]}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h3",{className:"jsx-e4f8d862052fe656 text-2xl font-bold mb-4",children:"Orders"}),g.map(e=>(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 bg-white p-4 mb-4 rounded-lg shadow-md",children:[(0,t.jsxs)("h4",{className:"jsx-e4f8d862052fe656 font-bold",children:["Order #",e.id]}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Status: ",e.status]}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Type: ",e.type]}),"delivery"===e.type&&e.userLocation&&(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("p",{className:"jsx-e4f8d862052fe656",children:"User Location:"}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Latitude: ",e.userLocation.latitude]}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Longitude: ",e.userLocation.longitude]}),(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 mt-2 h-64 w-full",children:(0,t.jsx)("iframe",{title:"Order ".concat(e.id," Map"),width:"100%",height:"100%",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=".concat(e.userLocation.latitude,",").concat(e.userLocation.longitude),allowFullScreen:!0,className:"jsx-e4f8d862052fe656"})})]}),(0,t.jsx)("ul",{className:"jsx-e4f8d862052fe656",children:e.items.map((e,s)=>(0,t.jsxs)("li",{className:"jsx-e4f8d862052fe656",children:[e.name," - $",e.price.toFixed(2)]},s))})]},e.id))]}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656",children:[(0,t.jsx)("h3",{className:"jsx-e4f8d862052fe656 text-2xl font-bold mb-4",children:"Table Bookings"}),x.map((e,s)=>(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 bg-white p-4 mb-4 rounded-lg shadow-md",children:[(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Table: ",e.table]}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Date: ",e.date]}),(0,t.jsxs)("p",{className:"jsx-e4f8d862052fe656",children:["Time: ",e.time]})]},s))]})]}):(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 max-w-md mx-auto",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-3xl font-bold mb-4",children:"Admin Login"}),(0,t.jsx)("input",{type:"password",value:O,onChange:e=>M(e.target.value),placeholder:"Enter password",className:"jsx-e4f8d862052fe656 w-full mb-4 p-2 border rounded"}),(0,t.jsx)("button",{onClick:()=>{"password-123"===O?(A(!0),_([...b])):alert("Incorrect password. Please try again.")},className:"jsx-e4f8d862052fe656 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300",children:"Login"})]})})]}),(0,t.jsx)("footer",{className:"jsx-e4f8d862052fe656 bg-white text-black p-4 mt-8 border-t border-gray-200",children:(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 container mx-auto flex justify-between items-center",children:[(0,t.jsx)("a",{href:"http://techspace.rf.gd/",target:"_blank",rel:"noopener noreferrer",className:"jsx-e4f8d862052fe656 hover:underline",children:"en"===v?"Made by Tech Space ET":"በቴክ ስፔስ ኢቲ የተሰራ"}),(0,t.jsx)("button",{onClick:()=>{M(""),A(!1),s("admin")},className:"jsx-e4f8d862052fe656 bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300",children:"Admin"})]})}),a&&(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 bg-white p-8 rounded-lg",children:[(0,t.jsx)("h2",{className:"jsx-e4f8d862052fe656 text-2xl font-bold mb-4",children:"Book a Table"}),(0,t.jsx)("div",{className:"jsx-e4f8d862052fe656 grid grid-cols-4 gap-4 mb-4",children:[1,2,3,4,5,6,7].map(e=>(0,t.jsxs)("button",{onClick:()=>l(e),className:"jsx-e4f8d862052fe656 "+"p-4 rounded-lg ".concat(o===e?"bg-red-500 text-white":"bg-gray-200"),children:["Table ",e]},e))}),(0,t.jsx)("input",{type:"date",value:i,onChange:e=>c(e.target.value),className:"jsx-e4f8d862052fe656 w-full mb-2 p-2 border rounded"}),(0,t.jsx)("input",{type:"time",value:f,onChange:e=>m(e.target.value),className:"jsx-e4f8d862052fe656 w-full mb-4 p-2 border rounded"}),(0,t.jsxs)("div",{className:"jsx-e4f8d862052fe656 flex justify-end",children:[(0,t.jsx)("button",{onClick:()=>r(!1),className:"jsx-e4f8d862052fe656 mr-2 px-4 py-2 bg-gray-300 rounded-lg",children:"Cancel"}),(0,t.jsx)("button",{onClick:()=>{o&&i&&f?(u([...x,{table:o,date:i,time:f}]),r(!1),l(null),c(""),m(""),alert("Table booked successfully!")):alert("Please select a table and enter date and time.")},className:"jsx-e4f8d862052fe656 px-4 py-2 bg-red-500 text-white rounded-lg",children:"Book Table"})]})]})}),(0,t.jsx)(n(),{id:"e4f8d862052fe656",children:"@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.animate-fadeIn{-webkit-animation:fadeIn 1s ease-in-out;-moz-animation:fadeIn 1s ease-in-out;-o-animation:fadeIn 1s ease-in-out;animation:fadeIn 1s ease-in-out}@-webkit-keyframes bounce{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);transform:translatey(-10px)}}@-moz-keyframes bounce{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-10px);transform:translatey(-10px)}}@-o-keyframes bounce{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-10px);transform:translatey(-10px)}}@keyframes bounce{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-10px);-moz-transform:translatey(-10px);-o-transform:translatey(-10px);transform:translatey(-10px)}}.animate-bounce{-webkit-animation:bounce 2s infinite;-moz-animation:bounce 2s infinite;-o-animation:bounce 2s infinite;animation:bounce 2s infinite}@-webkit-keyframes very-slow-spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes very-slow-spin{from{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes very-slow-spin{from{-o-transform:rotate(0deg);transform:rotate(0deg)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes very-slow-spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.animate-very-slow-spin{-webkit-animation:very-slow-spin 60s linear infinite;-moz-animation:very-slow-spin 60s linear infinite;-o-animation:very-slow-spin 60s linear infinite;animation:very-slow-spin 60s linear infinite}"})]})}}},function(e){e.O(0,[29,971,117,744],function(){return e(e.s=1999)}),_N_E=e.O()}]);