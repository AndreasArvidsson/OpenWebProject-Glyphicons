/**
 * @author Andreas Arvidsson
 * https://github.com/AndreasArvidsson/OpenWebProject-Glyphicons
 */
import "./glyphicons.min.css";
import "./glyphicon-none.css";
import React from "react";
import PropTypes from "prop-types";

const Glyph = ({ type, ...rest }) => {
    return <span
        className={"glyphicon glyphicon-" + type}
        {...rest}
    />
}
Glyph.propTypes = {
    type: PropTypes.string.isRequired
};
export default React.memo(Glyph);