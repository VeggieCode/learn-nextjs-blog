import React from 'react';
import utilityStyles from "../../styles/utils.module.css";

function PostList(props: { map: any }) {
    return <section className={`${utilityStyles.headingMd} ${utilityStyles.padding1px}`}>
        <h2 className={utilityStyles.headingLg}>Blog</h2>
        <ul className={utilityStyles.list}>
            {props.map}
        </ul>
    </section>;
}

export default PostList;
