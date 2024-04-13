import { AiOutlineBulb,AiOutlineReconciliation} from "react-icons/ai";
import { AiOutlineWindows } from "react-icons/ai";
import { BsDiagram3,BsBoomboxFill } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { FaRegHandshake,FaQuestion } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdBusiness,MdOutlineGroups3 ,MdOutlineCollections } from "react-icons/md";
import { MdOutlineMapsHomeWork,MdCurrencyRupee,MdOutlineGroupAdd } from "react-icons/md";
import { PiNotebook } from "react-icons/pi";
import { TbUserQuestion } from "react-icons/tb";
import { RiQuestionMark } from "react-icons/ri";
import { TiGroupOutline } from "react-icons/ti";



export const RoutersPagesData=[
    {
        page:"Home",
        Icon:IoHomeOutline,
        RoutePath:"/"
    
    },
    {
        page:"Know Us",
        Icon:AiOutlineBulb,
        RoutePath:"/knowus"
    
    },
    {
        page:"Brands",
        Icon:  MdBusiness,
        RoutePath:"/brands"
    
    },
    {
        page:"Distributors",
        Icon:BsDiagram3,
        RoutePath:"/distributors"
    
    },
    
    {
        page:"Retailers",
        Icon:MdOutlineMapsHomeWork,
        RoutePath:"/retailers"
    
    },
    
    {
        page:"Our Apps",
        Icon:AiOutlineWindows,
        RoutePath:"/ourapps"
    
    },
    {
        page:"Advertisers",
        Icon:RiAdvertisementLine,
        RoutePath:"/advertisers"
    
    },
    {
        page:"Partners",
        Icon:FaRegHandshake,
        RoutePath:"/partners"
    
    },
    {
        page:"Pricing",
        Icon:MdCurrencyRupee,
        RoutePath:"/pricing"
    
    },
    {
        page:"Join Us",
        Icon:MdOutlineGroupAdd,
        RoutePath:"/joinus"
    
    },

    
]


export const DistributorsTabsDetails=[
    {
        icon:TbUserQuestion,
        text:"What does Zono do?",
        id:"zotok"
    },
    {
        icon:TiGroupOutline ,
        text:"Ordering",
        id:"Ordering",
    },
    {
        icon:MdOutlineCollections,
        text:"Collections",
        id:"Collections"
    },
    {
        icon:AiOutlineReconciliation,
        text:"Reconcilliation",
        id:"Reconcilliation"
    },
    {
        icon:PiNotebook,
        text:"Marketing",
        id:"Marketing"
    },
    {
        icon:RiQuestionMark,
        text:"FAQ",
        id:"FAQ"
    },

]