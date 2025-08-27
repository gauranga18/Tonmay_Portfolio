import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export const PersonalWebsite = (): JSX.Element => {

  // Social media icons data
  const socialIcons = [
    { src: "/figmaAssets/vector-1.svg", alt: "Instagram", url: "https://instagram.com/tanmay_designer" },
    { src: "/figmaAssets/group.png", alt: "LinkedIn", url: "https://linkedin.com/in/tanmay-ui-dev" },
    { src: "/figmaAssets/vector-2.svg", alt: "Gmail", url: "mailto:tanmay@example.com" },
  ];

  // Service cards data
  const serviceCards = [
    {
      title: "Web Design",
      description: "Clean, responsive, and user-focused.",
      imageSrc: "/figmaAssets/image-3.png",
      className: "top-[674px] left-[7px]",
    },
    {
      title: "App Design",
      description: "Simple, intuitive mobile experiences.",
      imageSrc: "/figmaAssets/image-4.png",
      className: "top-[671px] left-[188px]",
    },
    {
      title: "Branding",
      description: "Visual identity with impact",
      imageSrc: "/figmaAssets/image-6.png",
      className: "top-[670px] left-[370px]",
    },
  ];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden bg-[linear-gradient(180deg,rgba(4,101,170,1)_1%,rgba(5,221,245,1)_95%)] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1336px] h-[1024px] top-0 left-[111px]">
          <div className="absolute w-[1336px] h-[1024px] top-0 left-0">
            <div className="absolute w-[770px] h-[1024px] top-0 left-[566px]">
              <img
                className="absolute w-[763px] h-[1024px] top-0 left-0"
                alt="Image pngofmine"
                src="/figmaAssets/image-pngofmine.png"
              />
            </div>

            <div className="absolute top-[191px] left-0 [font-family:'Poppins',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
              <span className="font-light">Hi, I&apos;m</span>
              <span className="font-medium italic">&nbsp;&nbsp;</span>
              <span className="font-semibold text-[85px]">Tanmay</span>
              <span className="font-medium italic">&nbsp;</span>
            </div>

            <div className="absolute top-[312px] left-[7px] [font-family:'Poppins',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[normal]">
              UI Designer &amp; Frontend Devloper
            </div>

            <div className="absolute top-[135px] left-0.5 [font-family:'Pacifico',Helvetica] font-normal text-white text-[45px] tracking-[0] leading-[normal]">
              Innovate Unique
            </div>

            <img
              className="absolute w-[88px] h-[132px] top-[87px] left-[671px]"
              alt="Vector"
              src="/figmaAssets/vector.svg"
            />

            <img
              className="absolute w-[70px] h-[115px] top-[443px] left-[1215px]"
              alt="Vector"
              src="/figmaAssets/vector.svg"
            />
          </div>

          {/* Navigation Menu */}
          <div className="absolute w-[475px] h-[38px] top-12 left-0">
            <nav className="absolute w-[455px] h-[38px] top-0 left-5 flex justify-start gap-[75px]">
              <Link href="/">
                <a className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] px-4 py-1 rounded-[20px] border border-solid border-[#fff9f9]" data-testid="nav-home">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-about">
                  About
                </a>
              </Link>
              <Link href="/skills">
                <a className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-skills">
                  Skills
                </a>
              </Link>
              <Link href="/projects">
                <a className="[font-family:'Poppins',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] hover:px-4 hover:py-1 hover:rounded-[20px] hover:border hover:border-white transition-all" data-testid="nav-projects">
                  Projects
                </a>
              </Link>
            </nav>
          </div>

          <div className="absolute w-[466px] top-[376px] left-[7px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
            <span className="font-light italic">
              A&nbsp;&nbsp;passionate of delivering intuitive user experieneces
              across web and mobile applications
            </span>
          </div>

          {/* Explore My Works Button */}
          <Link href="/projects">
            <Button className="absolute w-[266px] h-[58px] top-[494px] left-0 bg-[#5e50ff99] rounded-[20px] border border-solid border-[#07dbc9] shadow-[0px_4px_4px_#00000040] [font-family:'Poppins',Helvetica] font-light italic text-[#fafff9] text-[25px] tracking-[0] leading-[normal] hover:bg-[#5e50ffcc] transition-all" data-testid="button-explore-works">
              Explore My works
            </Button>
          </Link>

          {/* Social Media Icons */}
          <div className="absolute w-[196px] h-[53px] top-[866px] left-5 flex gap-[30px]">
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                onClick={() => window.open(icon.url, '_blank')}
                className="hover:scale-110 transition-transform cursor-pointer"
                data-testid={`social-${icon.alt.toLowerCase()}`}
              >
                <img
                  className="h-[45px] w-auto"
                  alt={icon.alt}
                  src={icon.src}
                />
              </button>
            ))}
          </div>

          {/* Project Stats Card */}
          <Card className="absolute w-[218px] h-[81px] top-[568px] left-[269px] shadow-[0px_4px_4px_#00000040] bg-transparent">
            <CardContent className="relative w-[212px] h-[81px] p-0">
              <div className="absolute w-[60px] top-0 left-7 [font-family:'Poppins',Helvetica] font-medium text-[#0b0000] text-[50px] tracking-[0] leading-[normal]">
                10
              </div>
              <div className="absolute w-[18px] top-3 left-[74px] [font-family:'Poppins',Helvetica] font-medium text-[#131212] text-2xl tracking-[0] leading-[normal]">
                +
              </div>
              <div className="absolute w-[79px] top-[11px] left-[101px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                Project <br />
                Launched
              </div>
              <div className="absolute w-[212px] h-[73px] top-[3px] left-0 rounded-[20px] border-2 border-solid border-[#fef9f9]" />
            </CardContent>
          </Card>

          {/* Front End Mentor Badge */}
          <Card className="absolute w-60 h-[73px] top-[571px] left-[7px] bg-transparent shadow-[0px_4px_4px_#00000040]">
            <CardContent className="relative w-60 h-[73px] p-0">
              <img
                className="w-[46px] h-[50px] top-[11px] left-[7px] absolute object-cover"
                alt="Front End Mentor Logo"
                src="/figmaAssets/image-2.png"
              />
              <div className="absolute w-[168px] top-[5px] left-[57px] [font-family:'Poppins',Helvetica] font-normal text-[#fdf7f7] text-[17px] tracking-[0] leading-[normal]">
                <span className="font-light italic">
                  {" "}
                  Top 5% on <br />{" "}
                </span>
                <span className="font-medium text-[19px]">
                  Front end Mentor
                </span>
              </div>
              <div className="absolute w-60 h-[73px] top-0 left-0 rounded-[20px] border-2 border-solid border-[#fef9f9]" />
            </CardContent>
          </Card>

          {/* Service Cards */}
          {serviceCards.map((card, index) => (
            <Card
              key={index}
              className={`absolute w-[173px] h-[149px] ${card.className} bg-[#0772ff5e] rounded-[15px] border border-solid border-[#fff8f8]`}
            >
              <CardContent className="p-0 h-full relative">
                <img
                  className="w-[46px] h-[46px] top-[18px] left-[15px] absolute object-cover"
                  alt={`${card.title} icon`}
                  src={card.imageSrc}
                />
                <div className="absolute top-[23px] left-[77px] [font-family:'Poppins',Helvetica] font-semibold text-[#fff6f6] text-base tracking-[0] leading-5">
                  {card.title.includes(" ") ? (
                    <>
                      {card.title.split(" ")[0]}
                      <br />
                      {card.title.split(" ")[1]}
                    </>
                  ) : (
                    card.title
                  )}
                </div>
                <div className="absolute w-[132px] top-[88px] left-6 [font-family:'Poppins',Helvetica] font-normal text-[#fff5f5] text-sm tracking-[0] leading-5">
                  {card.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Logo */}
        <img
          className="absolute w-[45px] h-[45px] top-[43px] left-8"
          alt="Profile Logo"
          src="/figmaAssets/ellipse-1.png"
        />

        {/* Contact Button */}
        <Button 
          className="fixed w-[170px] h-[53px] top-[34px] left-[1243px] rounded-[30px] border-[3px] border-solid border-[#0599f5] shadow-[0px_4px_4px_#00000040] [font-family:'Poppins',Helvetica] font-medium text-[#f8fcff] text-xl bg-transparent hover:bg-[#0599f5] transition-all" 
          data-testid="button-contact"
          onClick={() => window.open('mailto:tanmay@example.com', '_blank')}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};
