import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сломать: PerfectVerb = {
  name: Word('сломать', 4),
  singular1stPerson: Word('сломаю', 4),
  singular2ndPerson: Word('сломаешь', 4),
  singular3rdPerson: Word('сломает', 4),
  plural1stPerson: Word('сломаем', 4),
  plural2ndPerson: Word('сломаете', 4),
  plural3rdPerson: Word('сломают', 4),
  masculinePast: Word('сломал', 4),
  femininePast: Word('сломала', 4),
  neuterPast: Word('сломало', 4),
  pluralPast: Word('сломали', 4),
  imperativeInformal: Word('сломай', 4),
  imperativeFormal: Word('сломайте', 4),
  imperfect: ['ломать'],
};

perfectVerbs.set(сломать.name.text, сломать);

export { сломать };