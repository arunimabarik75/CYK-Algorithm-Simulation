import React from "react";

export default function Output({all_substr}) {
    all_substr = [...all_substr]
    const list_items = all_substr.map((e,id) =>
        <li key={id}>{e}</li>
    )
    return (
        <ul>{list_items}</ul>
    )
}