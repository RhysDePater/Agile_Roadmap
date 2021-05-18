import api from "@forge/api";
import { fetch } from '@forge/api';

export async function fetchCommentsForIssue() {
    const res = await api
        .asApp()
        .requestJira(`/rest/api/3/issue/CKRS-29`);

    const data = await res.json();
    return data;
};