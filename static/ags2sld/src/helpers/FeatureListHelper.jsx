import LayerHelper from './LayersHelper'
import { doGet } from '../utils/utils'
import isURL from 'validator/lib/isURL'
/** Class for FeatureList manipulation */
export class FeatureListHelper {
    /**
    * This function return Attachments tags
    * @typedef {Object} Zoom
    * @property {Number} minZoom - minimum zoom of map
    * @property {Number} maxZoom - maximum zoom of map
    * @property {Number} zoom - initial zoom of map
    * @typedef {Object} Configuration
    * @property {Boolean} scaleLine - scaleline control
    * @property {Boolean} zoomSlider - zoom slider control
    * @property {Boolean} fullScreen - fullScreen control
    * @property {Boolean} dragRotateAndZoom - dragRotateAndZoom interaction
    * @property {Zoom} zoom - zoom configuration
    * @property {Array.<string>} attachmentTags - attachment tags
    * @param {Configuration}  config configuration object
    * @returns {Array.<string>}
    */
    getAttachmentTags(config) {
        const configTags = config.attachmentTags
        const tags = (configTags && configTags.length > 0) ? configTags : [
            `feature_list_${LayerHelper.layerName(config.layer)}`]
        return tags
    }
    /**
    * This function generation options for react-select
    * @typedef {Object} SelectOption
    * @property {string} label - option label
    * @property {string|Number|Boolean} value - option value
    * @param {Array}  arr array of items you want to generate options for
    * @param {string}  [label=null] if arr of objects -> label propertry 
    * @param {string}  [value=null] if arr of objects -> value propertry 
    * @returns {Array.<SelectOption>}
    */
    getSelectOptions(arr, label = null, value = null) {
        let options = []
        if (arr && arr.length > 0) {
            options = arr.map(item => {
                if (!label) {
                    return { value: item, label: item }
                }
                return { value: item[label], label: item[value ? value : label] }
            })
        }
        return options

    }
    /**
    * This function do get request to get attachments
    * @param {string}  attachmentURL attachments url
    * @returns {Promise}
    */
    loadAttachments(attachmentURL) {
        return doGet(attachmentURL)
    }
    /**
    * This function check if image source is good or not
    * @param {string}  src image source
    * @param {Function}  good function to be executed if source is valid
    * @param {Function}  bad function to be executed if source is invalid
    * @returns {void}
    */
    checkImageSrc(src, good, bad) {
        let img = new Image()
        img.onload = good
        img.onerror = bad
        img.src = src
    }
    /**
    * This function search in attachments image by id
    * @param {Number}  id image object id
    * @returns {Array.<Object>}
    */
    searchById(id) {
        const { attachments } = this.state
        let result = []
        if (attachments) {
            attachments.map((imageObj) => {
                if (imageObj.is_image && imageObj.feature_id === id) {
                    result.push(imageObj)
                }
            })
        }
        return result
    }
    /**
    * This function get specific attrubute by name
    * @param {Array.<Object>}  attrs Array of attributes to search within
    * @param {string}  attrName attribute name
    * @returns {Array.<Object>}
    */
    getFilterByName(attrs, attrName) {
        let attributeType = null
        if (attrs) {
            attrs.forEach(attr => {
                if (attr.attribute === attrName) {
                    attributeType = attr.attribute_type
                }
            })
        }
        return attributeType
    }
    /**
    * This function check if url is valid
    * @param {string}  value url to check
    * @returns {Boolean}
    */
    checkURL(value) {
        /* validator validate strings only */
        if (typeof (value) === "string") {
            return isURL(value)
        }
        return false
    }
}
export default new FeatureListHelper()
