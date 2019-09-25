/**
 * @author Andreas Arvidsson
 * https://github.com/AndreasArvidsson/OpenWebProject-Glyphicons
 */
import React from "react";
import PropTypes from "prop-types";

const Glyph = ({ type, ...rest }) => {
    //return <span className={"glyphicon glyphicon-" + type} {...rest} />
    return React.createElement("span", { className: "glyphicon glyphicon-" + type, ...rest }, null);
}
Glyph.propTypes = {
    type: PropTypes.string.isRequired
};
export default React.memo(Glyph);