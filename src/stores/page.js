import { ref } from 'vue';
import { defineStore } from 'pinia';

import { getPageContent } from '@/api/page';

export const usePageStore = defineStore('page', () => {
    
    const _page = ref('');
    const isFetched = ref(false);

    const storePage = (fetchedPage) => {
        _page.value = fetchedPage;
    };

    const fetchPage = async () => {
        const fetchedPage = await getPageContent();
        storePage(fetchedPage[0]);
        isFetched.value === true;
    };

    return {
        _page,
        fetchPage,
        storePage
    };

});