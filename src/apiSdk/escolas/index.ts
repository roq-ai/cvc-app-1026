import axios from 'axios';
import queryString from 'query-string';
import { EscolaInterface, EscolaGetQueryInterface } from 'interfaces/escola';
import { GetQueryInterface } from '../../interfaces';

export const getEscolas = async (query?: EscolaGetQueryInterface) => {
  const response = await axios.get(`/api/escolas${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEscola = async (escola: EscolaInterface) => {
  const response = await axios.post('/api/escolas', escola);
  return response.data;
};

export const updateEscolaById = async (id: string, escola: EscolaInterface) => {
  const response = await axios.put(`/api/escolas/${id}`, escola);
  return response.data;
};

export const getEscolaById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/escolas/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEscolaById = async (id: string) => {
  const response = await axios.delete(`/api/escolas/${id}`);
  return response.data;
};
