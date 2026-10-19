export type Testimonial = {
  slug: string;
  title: string;
  quote: string;
  attribution: string;
  role?: string;
  image: string;
  body: string[];
  href?: string;
};

/** Authentic client stories from marywassef.com/client-stories/ */
export const testimonials: Testimonial[] = [
  {
    slug: "boyd-family",
    title: "A Great Experience",
    quote:
      "Over the last 3 years we have worked with Mary and her team on several home buying and selling transactions. We have had a great experience and would thoroughly recommend them.",
    attribution: "The Boyd Family",
    role: "Repeat clients since 2016",
    image: "/images/stories/boyd-1.jpg",
    href: "https://marywassef.com/client-stories-the-boyd-family/",
    body: [
      "Mary Wassef has many repeat clients, and the Boyd family is no exception. “The Boyds were referred to me from past clients. Our first transaction was in 2016 with three more to follow,” she said.",
      "“Mary and Mark are very knowledgeable about specifics of the Heights real estate market, and when hiccups occur, they give expert advice in a calm and stable manner.”",
      "The Boyds stay active in the Heights community with Mary’s team. “I would not sell my house without them!” they said.",
    ],
  },
  {
    slug: "bailey-olstad",
    title: "We Are So Happy With Our Home",
    quote:
      "Mary is a top-notch Heights Realtor and she and her team have remarkable knowledge of the luxury home market. Mary, Mark, and their incredible team made the often-stressful process of searching for and buying a home a breeze.",
    attribution: "The Bailey/Olstad Family",
    role: "JJ and Jason",
    image: "/images/stories/bailey-1.jpg",
    href: "https://marywassef.com/client-stories-baileyolstad/",
    body: [
      "When JJ and Jason began their home search, they wanted an agent with real Heights experience. Friends who had already bought and sold with Mary referred them.",
      "“We are so happy with our home purchase and are extremely thankful for Circa Real Estate. With their expert advice and calming influence, we found our perfect home.”",
      "They remain part of the community Mary supports. “I’ve watched their daughter grow up. I’ve even sponsored her softball team, the Lady Bears,” Mary said.",
    ],
  },
  {
    slug: "caroline-bower-lawrence",
    title: "Talented Problem Solvers",
    quote:
      "Mary Wassef and her team at Circa are talented problem solvers who can get things done. They have a strong network of people to help you with whatever you need. They are very responsive and make things happen quickly.",
    attribution: "Caroline Bower Lawrence",
    role: "Interior designer & client",
    image: "/images/stories/caroline-1.jpg",
    href: "https://marywassef.com/client-stories-caroline-bower-lawrence/",
    body: [
      "Caroline first met Mary across the negotiating table when Mary represented Renovo Homes on a new Craftsman in the Heights. Four years later, Caroline and her husband hired Mary to sell and help them downsize nearby.",
      "“I felt they really knew how to best market this house for top dollar in this market. She actually had buyers in mind before we even put the house on the market… The house sold in one week’s time, for asking price!”",
      "“We had a great experience and have remained friends. We would strongly recommend Mary Wassef and the team at Circa Real Estate.”",
    ],
  },
  {
    slug: "elbert-johnson",
    title: "I Feel Like My Listings Are a High Priority",
    quote:
      "Mary’s knowledge of the local market and customer trends is crucial to my decision-making from selecting lots, to architecture, to interior design.",
    attribution: "Elbert Johnson",
    role: "Renovo Homes, LLC",
    image: "/images/stories/elbert-1.jpg",
    href: "https://marywassef.com/client-stories-elbert-johnson/",
    body: [
      "Mary met Elbert when he purchased a house in Houston Heights in 2008. When he later launched Renovo Homes to build luxury homes in the Heights, he turned to Mary again.",
      "“I’ve represented him on every house that he has done. We’ve helped him build his site and really love our partnership with Elbert and his team,” Mary said.",
      "“With Mary and her team, I feel like my listings are a high priority with consistent photography updates, events, and more to help my homes and business gain awareness.” Elbert added, “I would not do a residential real estate transaction without them.”",
    ],
  },
  {
    slug: "johnny-hollins",
    title: "We Hit It Off",
    quote:
      "Their professional relationship has lasted for more than 12 years, and Mary has represented Johnny in numerous transactions ever since their open house meeting in 2008.",
    attribution: "Johnny Hollins",
    role: "Client since 2008",
    image: "/images/stories/johnny-1.jpg",
    href: "https://marywassef.com/client-stories-johnny/",
    body: [
      "Mary met Johnny at an open house. “I was working on a holiday and he was looking at someone else’s build… We hit it off and I started representing him thereafter,” Mary said.",
      "Her patience and care stood out, and Johnny came back for subsequent sales and purchases. Their work together has continued for more than a decade.",
    ],
  },
  {
    slug: "jacquelyn-talbert",
    title: "I Love Collaborating With Her",
    quote:
      "She’s so easy to work with and her home is always stunning! Beautifully decorated and just absolutely every single thing done that would be needed to show the home.",
    attribution: "Jacquelyn Talbert",
    role: "Interior designer & client",
    image: "/images/stories/jacquelyn.jpg",
    body: [
      "When Jacquelyn prepared to move to the Heights from San Antonio, she worried the process would be complicated. Mary helped with the home search and more.",
      "“She was also searching for a new job at the time,” Mary said. “I referred her to an employer who then hired her! She is now an interior designer and I love collaborating with her.”",
    ],
  },
];

export function getTestimonialBySlug(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}
