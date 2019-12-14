import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позавтракать: PerfectVerb = {
  name: Word('позавтракать', 3),
  singular1stPerson: Word('позавтракаю', 3),
  singular2ndPerson: Word('позавтракаешь', 3),
  singular3rdPerson: Word('позавтракает', 3),
  plural1stPerson: Word('позавтракаем', 3),
  plural2ndPerson: Word('позавтракаете', 3),
  plural3rdPerson: Word('позавтракают', 3),
  masculinePast: Word('позавтракал', 3),
  femininePast: Word('позавтракала', 3),
  neuterPast: Word('позавтракало', 3),
  pluralPast: Word('позавтракали', 3),
  imperativeInformal: Word('позавтракай', 3),
  imperativeFormal: Word('позавтракайте', 3),
  imperfect: ['завтракать'],
};

perfectVerbs.set(позавтракать.name.text, позавтракать);

export { позавтракать };