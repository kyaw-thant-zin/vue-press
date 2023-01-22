
import { ApiBasePath, ApiUrls } from '@/api/constants';
import axios from 'axios';

export const getPageContent = async () => {
    try {
        // const { data } = await axios.get(`${ApiBasePath}${ApiUrls.getPageContentBySlug}`.replace('{page_slug}', 'about'));
        const { data } = await axios.get('http://vwp.local/wp-json/wp/v2/pages?slug=about');
        return data;
    } catch (error) {
        return error;
    }
}