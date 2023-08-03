import { FC, Fragment } from "react";
import Avatar from "../Avatar/page";

const LightDarkImage: FC<{
    lightclassName: string;
    darkclassName: string;
    lightpath: string;
    darkpath: string;
}> = ({ lightclassName, darkclassName, lightpath, darkpath }) => {
    return (
        <Fragment>
            <Avatar
                path={lightpath}
                className={lightclassName}
            />
            <Avatar
                path={darkpath}
                className={darkclassName}
            />
        </Fragment>
    );
};

export default LightDarkImage;
