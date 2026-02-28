import OpenAI from 'openai';
import { OPENAI_GPT_KEY } from './constant';

export const client = new OpenAI({
    apiKey: OPENAI_GPT_KEY,
    dangerouslyAllowBrowser: true
});
