import React, { useEffect } from "react";
import styled from "styled-components";
// import { useRecoilState } from 'recoil';
// import { curCategoryAtom } from '../../store/recoil';
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { CurCategoryActions } from "../../store/CurCategory";
interface propType {
    value: string;
}
const CategoryButton = (props: propType) => {
    //   const [curCategory, setCurCategory] =
    //     useRecoilState<string>(curCategoryAtom);

    //   const onClick = () => {
    //     if (curCategory === props.value) setCurCategory('none');
    //     else setCurCategory(props.value);
    //   };
    const dispatch = useDispatch();
    const curCategory = useSelector((state: RootState) => state.category);

    const onClick = () => {
        if (curCategory.name === props.value)
            dispatch(CurCategoryActions.changeCurCategory("none"));
        else dispatch(CurCategoryActions.changeCurCategory(props.value));
    };

    return (
        <Button
            onClick={onClick}
            style={{
                backgroundColor:
                    curCategory.name === props.value
                        ? "#e2edff"
                        : "transparent",
                color: curCategory.name === props.value ? "#425ad5" : "#000",
            }}
        >
            {props.value}
        </Button>
    );
};

export default React.memo(CategoryButton);

const Button = styled.button`
    cursor: pointer;
    width: 130px;
    aspect-ratio: 2/1;
    border-radius: 30px;
    border: none;
    font-weight: 500;
    overflow: hidden;
`;
