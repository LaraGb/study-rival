import About from "../components/about/Index";
import Banner from "../components/banner/Banner";
import Feature from "../components/feature/Index";
import CallToAction from "../components/call-to-action/CallToAction";

export type sectionListDataT = {
    id: string;
    label?: string;
    Component?: JSX.Element;
}

const sectionList: sectionListDataT[] = [
    {
        id: 'banner',
        label: 'Banner',
        Component: <Banner/>
    },
    {
        id: 'about',
        label: 'About',
        Component: <About />
    },
    {
        id: 'feature',
        label: 'Feature',
        Component: <Feature/>
    },
    {
        id: 'work',
        label: 'How Does It Work'
    },
    {
        id: 'calltoaction',
        Component: <CallToAction/>
    }
];

export default sectionList;

