import {FaCheck,FaLock,FaGithub} from 'react-icons/fa';
import {CgTwitter,CgBee} from 'react-icons/cg';
import {RiDeleteBack2Fill, RiLogoutBoxRFill} from 'react-icons/ri';
import {BsStarFill, BsFillBellFill} from 'react-icons/bs';
import {BiSolidMessageSquareDots} from 'react-icons/bi';
import {IoMdCompass} from 'react-icons/io';
import {IoSettingsSharp} from 'react-icons/io5';
import {MdAnalytics, MdArrowForwardIos, MdOutlineArrowBackIos} from 'react-icons/md';
import {HiPause} from 'react-icons/hi';
import {LuPlay} from 'react-icons/lu';

const pageIcons = {
  Check:FaCheck,
  Play:LuPlay,
  Next:MdArrowForwardIos,
  Prev: MdOutlineArrowBackIos,
  Pause:HiPause,
  Remove:RiDeleteBack2Fill,
  Lock:FaLock,
  Twitter:CgTwitter,
  GitHub:FaGithub,
  Portifolio:CgBee,
  Star:BsStarFill,
  Bell:BsFillBellFill,
  logOut:RiLogoutBoxRFill,
  Message:BiSolidMessageSquareDots,
  Compass:IoMdCompass,
  Analytics:MdAnalytics,
  Settings:IoSettingsSharp
}

export default pageIcons;