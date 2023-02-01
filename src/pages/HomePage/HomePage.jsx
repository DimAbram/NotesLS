import React from 'react';

import st from './home.module.scss'
import { HomeLinkItem } from './HomeLinkItem';

export const HomePage = () => {
    return (
        <div className={st.page}>
            <HomeLinkItem
                text="Если вы хотите создать заметку перейдите на вкладку заметки или нажмите на кнопку ниже"
                link="/notes"
            />
        </div>
    );
};
