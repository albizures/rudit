import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ломать: PerfectVerb = {
  name: Word('ломать', 3),
  singular1stPerson: Word('ломаю', 3),
  singular2ndPerson: Word('ломаешь', 3),
  singular3rdPerson: Word('ломает', 3),
  plural1stPerson: Word('ломаем', 3),
  plural2ndPerson: Word('ломаете', 3),
  plural3rdPerson: Word('ломают', 3),
  masculinePast: Word('ломал', 3),
  femininePast: Word('ломала', 3),
  neuterPast: Word('ломало', 3),
  pluralPast: Word('ломали', 3),
  imperativeInformal: Word('ломай', 3),
  imperativeFormal: Word('ломайте', 3),
  imperfect: ['сломать','поломать'],
};

perfectVerbs.set(ломать.name.text, ломать);

export { ломать };