import React from "react";
import Layout from './components/layout/Index';
import sectionList,{sectionListDataT} from "./section_list/sectionList";


export default function Index() {
  return (
    <Layout>
       {
        sectionList.map((section:sectionListDataT) => (
            <div id={section.id}>{section.Component}</div>
          )
        )
       }
    </Layout>
  );
}
