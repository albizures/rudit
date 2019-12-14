import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завтракать: PerfectVerb = {
  name: Word('завтракать', 1),
  singular1stPerson: Word('завтракаю', 1),
  singular2ndPerson: Word('завтракаешь', 1),
  singular3rdPerson: Word('завтракает', 1),
  plural1stPerson: Word('завтракаем', 1),
  plural2ndPerson: Word('завтракаете', 1),
  plural3rdPerson: Word('завтракают', 1),
  masculinePast: Word('завтракал', 1),
  femininePast: Word('завтракала', 1),
  neuterPast: Word('завтракало', 1),
  pluralPast: Word('завтракали', 1),
  imperativeInformal: Word('завтракай', 1),
  imperativeFormal: Word('завтракайте', 1),
  imperfect: ['позавтракать'],
};

perfectVerbs.set(завтракать.name.text, завтракать);

export { завтракать };