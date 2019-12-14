import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const послушать: PerfectVerb = {
  name: Word('послушать', 4),
  singular1stPerson: Word('послушаю', 4),
  singular2ndPerson: Word('послушаешь', 4),
  singular3rdPerson: Word('послушает', 4),
  plural1stPerson: Word('послушаем', 4),
  plural2ndPerson: Word('послушаете', 4),
  plural3rdPerson: Word('послушают', 4),
  masculinePast: Word('послушал', 4),
  femininePast: Word('послушала', 4),
  neuterPast: Word('послушало', 4),
  pluralPast: Word('послушали', 4),
  imperativeInformal: Word('послушай', 4),
  imperativeFormal: Word('послушайте', 4),
  imperfect: ['слушать'],
};

perfectVerbs.set(послушать.name.text, послушать);

export { послушать };