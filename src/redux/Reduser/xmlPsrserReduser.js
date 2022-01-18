import XMLParser from 'react-xml-parser'
import { xmlDataBase } from "../../api/cocghdb/apiXml"

const TEXT_XML = 'TEXT_XML'
const XML_XML = 'XML_XML'

let initialState = {
    xmlData: ``,
    xmlText: ``,
    xml: [
        {
            name: "name1"
        },
        {
            name: "name2"
        },
        {
            name: "name3"
        }
    ],
    xmlName: { 1: 2, 3: 4 }
}

const xmlParserReduser = (state = initialState, action) => {
    switch (action.type) {

        case TEXT_XML:
            return {
                ...state,
                xmlText: action.xmlText
            }

        case XML_XML:
            return {
                ...state,
                xml: action.xmlXml
            }

        default:
            return state
    }
}

export const xmlText = (xmlText) => ({ type: TEXT_XML, xmlText })
export const xmlXml = (xmlXml) => ({ type: XML_XML, xmlXml })
export const getXmlText = () =>
    async function (dispatch) {
        xmlDataBase.getXmlData()
            .then(response => {
                if (response.status === 200) {
                    dispatch(xmlText(response.data))
                }
                else {
                    dispatch(xmlText(response.message))
                }
            })
    }

export const parserXmlData = (xmlText) =>
    async function (dispatch) {
        let xml = new XMLParser().parseFromString(xmlText)
        dispatch(xmlXml(xml))
        //dispatch(xmlXml(xml.children))
    }

//let xmlName = (xml.getElementsByTagName('Name')) //Assume xmlText contains the example XML
//dispatch(xmlXml(xmlName))

export default xmlParserReduser