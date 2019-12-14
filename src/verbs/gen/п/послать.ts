import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const послать: PerfectVerb = {
  name: Word('послать', 4),
  singular1stPerson: Word('пошлю', 4),
  singular2ndPerson: Word('пошлёшь', 4),
  singular3rdPerson: Word('пошлёт', 4),
  plural1stPerson: Word('пошлём', 4),
  plural2ndPerson: Word('пошлёте', 4),
  plural3rdPerson: Word('пошлют', 4),
  masculinePast: Word('послал', 4),
  femininePast: Word('послала', 4),
  neuterPast: Word('послало', 4),
  pluralPast: Word('послали', 4),
  imperativeInformal: Word('пошли', 4),
  imperativeFormal: Word('пошлите', 4),
  imperfect: ['посылать','слать'],
};

perfectVerbs.set(послать.name.text, послать);

export { послать };