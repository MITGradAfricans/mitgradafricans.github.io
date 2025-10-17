import { TeamMemberProps } from "../components/TeamMember";
import jonasPhoto from "../assets/images/team/jonas.jpeg";
import giannaPhoto from "../assets/images/team/gianna.png";
import abimbolaPhoto from "../assets/images/team/abimbola.jpeg"
import akaPhoto from "../assets/images/team/aka.jpeg"

export const teamMembers: TeamMemberProps[] = [
  {
    name: "Abimbola Oluwade",
    role: "Co-President",
    dept: "Mechanical Engineering",
    country: "🇳🇬 Nigeria",
    photo: abimbolaPhoto,
    email: "aoluwade@mit.edu",
    linkedin:
      "https://www.linkedin.com/in/abimbolaoluwade/",
  },
  {
    name: "Jonas Sog",
    role: "Co-President",
    dept: "Mechanical Engineering",
    country: "🇹🇬 Togo",
    photo: jonasPhoto,
    email: "jonassog@mit.edu",
    linkedin:
      "https://www.linkedin.com/in/jsog/",
  },
  {
    name: "Naomi Kirimi",
    role: "Treasurer",
    dept: "Electrical Engineering & Computer Science",
    country: "🇰🇪 Kenya",
    photo: jonasPhoto,
    email: "nkirimi@mit.edu",
    linkedin:
      "https://www.linkedin.com/in/naomi-k-7bb100183/",
  },
  {
    name: "Odinaka Kingsley Eze",
    role: "Secretary",
    dept: "History, Anthropology, Science, Technology & Society",
    country: "🇳🇬 Nigeria",
    photo: akaPhoto,
    email: "akaeze@mit.edu",
    linkedin:
      "https://www.linkedin.com/in/odinaka-eze-310217153/",
  },
  {
    name: "Gianna Torpey",
    role: "Webmaster",
    dept: "Electrical Engineering & Computer Science",
    country: "🇬🇭 Ghana",
    photo: giannaPhoto,
    email: "gtorpey@mit.edu",
    linkedin:
      "https://www.linkedin.com/in/gianna-torpey-825214187/",
  },
];
