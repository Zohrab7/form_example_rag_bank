import * as React from "react";
import {Accordion, Menu, Segment, Sidebar as SideBarWrapper} from "semantic-ui-react";
import {useSelector} from "react-redux";

import "./sidebar.scss";
import {StoreState} from "../types";
import {ActionListByType} from "../utils";
import {fieldBarTypes} from "../redux/reducers/toolbox";


interface IProps {

}


export const SideBar: React.FC<IProps> = ({children}) => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const {BASIC, ADVANCED, DATA, LAYOUT, PREMIUM} = useSelector(({toolbox}: StoreState) => toolbox.fieldBar);


    const handleClick = (e: any, titleProps: any) => {
        const {index} = titleProps

        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex);
    }


    return (
        <SideBarWrapper.Pushable className="rga__sidebar" as={Segment}>
            <SideBarWrapper
                as={Menu}
                direction="left"
                animation='push'
                icon='labeled'
                inverted
                vertical
                visible
                width='wide'
            >
                <Accordion as={Menu} vertical>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 0}
                            content={fieldBarTypes.basic}
                            index={0}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 0} content={<ActionListByType action={BASIC} />}/>
                    </Menu.Item>

                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 1}
                            content={fieldBarTypes.advanced}
                            index={1}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 1} content={<ActionListByType action={ADVANCED}/>}/>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 2}
                            content={fieldBarTypes.data}
                            index={2}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 2} content={<ActionListByType action={DATA}/>}/>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 3}
                            content={fieldBarTypes.layout}
                            index={3}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 3} content={<ActionListByType action={LAYOUT}/>}/>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 4}
                            content={fieldBarTypes.premium}
                            index={4}
                            onClick={handleClick}
                        />
                        <Accordion.Content active={activeIndex === 4} content={<ActionListByType action={PREMIUM}/>}/>
                    </Menu.Item>
                </Accordion>
            </SideBarWrapper>

            <SideBarWrapper.Pusher>
                {children}
            </SideBarWrapper.Pusher>
        </SideBarWrapper.Pushable>
    );
};
