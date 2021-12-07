import { Checkbox } from "@material-ui/core";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  ArrowDownwardRounded,
  Check,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  Close,
  ExpandMore,
  Folder,
  ForwardOutlined,
  Minimize,
  OpenInNew,
  RadioButtonUnchecked,
} from "@material-ui/icons";
import { ClosedCaption, FolderOpen } from "@mui/icons-material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import styles from "../styles/Categories.module.css";
import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
const nodes = [
  {
    value: "mars",
    label: "Mars",
    children: [
      { value: "phobos", label: "Phobos" },
      {
        value: "deimos",
        label: "Deimos",
        children: [
          { value: "phobo", label: "Phobo" },
          { value: "deimo", label: "Deimo" },
        ],
      },
    ],
  },
];

const Categories = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  return (
    <div className={styles.categories}>
      
     <div className={styles.wrapper} >
     <h3>Categories</h3>
     <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={{
          check: <CheckCircleOutlineIcon />,
          uncheck: <CheckBoxOutlineBlank />,
          halfCheck: <CheckBoxOutlined />,
          expandClose: <ArrowForwardIosIcon />,
          expandOpen: <ArrowCircleDownIcon />,
          expandAll: <ArrowDownwardRounded />,
        //   collapseAll: <Minimize />,
          parentClose: <Folder />,
          parentOpen: <FolderOpen />,
          leaf: <HorizontalRuleIcon />,
        }}
      />
     </div>
    </div>
  );
};

export default Categories;
