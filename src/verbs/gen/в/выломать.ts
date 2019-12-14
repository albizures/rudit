import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выломать: PerfectVerb = {
  name: Word('выломать', 1),
  singular1stPerson: Word('выломаю', 1),
  singular2ndPerson: Word('выломаешь', 1),
  singular3rdPerson: Word('выломает', 1),
  plural1stPerson: Word('выломаем', 1),
  plural2ndPerson: Word('выломаете', 1),
  plural3rdPerson: Word('выломают', 1),
  masculinePast: Word('выломал', 1),
  femininePast: Word('выломала', 1),
  neuterPast: Word('выломало', 1),
  pluralPast: Word('выломали', 1),
  imperativeInformal: Word('выломай', 1),
  imperativeFormal: Word('выломайте', 1),
  imperfect: [],
};

perfectVerbs.set(выломать.name.text, выломать);

export { выломать };