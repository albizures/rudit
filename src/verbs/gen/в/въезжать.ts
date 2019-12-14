import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const въезжать: PerfectVerb = {
  name: Word('въезжать', 5),
  singular1stPerson: Word('въезжаю', 5),
  singular2ndPerson: Word('въезжаешь', 5),
  singular3rdPerson: Word('въезжает', 5),
  plural1stPerson: Word('въезжаем', 5),
  plural2ndPerson: Word('въезжаете', 5),
  plural3rdPerson: Word('въезжают', 5),
  masculinePast: Word('въезжал', 5),
  femininePast: Word('въезжала', 5),
  neuterPast: Word('въезжало', 5),
  pluralPast: Word('въезжали', 5),
  imperativeInformal: Word('въезжай', 5),
  imperativeFormal: Word('въезжайте', 5),
  imperfect: ['въехать'],
};

perfectVerbs.set(въезжать.name.text, въезжать);

export { въезжать };