--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

-- Started on 2021-02-18 11:08:09 WIB

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16387)
-- Name: tb_satu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_satu (
    id integer NOT NULL,
    name text NOT NULL,
    address character(60),
    salary real
);


ALTER TABLE public.tb_satu OWNER TO postgres;

--
-- TOC entry 2959 (class 0 OID 16387)
-- Dependencies: 202
-- Data for Name: tb_satu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_satu (id, name, address, salary) FROM stdin;
1	Nabil	Bantul                                                      	300000
\.


--
-- TOC entry 2832 (class 2606 OID 16394)
-- Name: tb_satu tb_satu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_satu
    ADD CONSTRAINT tb_satu_pkey PRIMARY KEY (id);


-- Completed on 2021-02-18 11:08:09 WIB

--
-- PostgreSQL database dump complete
--

