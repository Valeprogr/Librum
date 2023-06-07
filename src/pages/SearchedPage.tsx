import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

const SearchedPage = () => {
    const { book } = useParams();
    console.log(book)
    return (
        <>
            <h1>Here come the books cards</h1>
            <div></div>
        </>
    )
}

export default SearchedPage;