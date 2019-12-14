import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поломать: PerfectVerb = {
  name: Word('поломать', 5),
  singular1stPerson: Word('поломаю', 5),
  singular2ndPerson: Word('поломаешь', 5),
  singular3rdPerson: Word('поломает', 5),
  plural1stPerson: Word('поломаем', 5),
  plural2ndPerson: Word('поломаете', 5),
  plural3rdPerson: Word('поломают', 5),
  masculinePast: Word('поломал', 5),
  femininePast: Word('поломала', 5),
  neuterPast: Word('поломало', 5),
  pluralPast: Word('поломали', 5),
  imperativeInformal: Word('поломай', 5),
  imperativeFormal: Word('поломайте', 5),
  imperfect: [],
};

perfectVerbs.set(поломать.name.text, поломать);

export { поломать };