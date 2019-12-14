import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наломать: PerfectVerb = {
  name: Word('наломать', 5),
  singular1stPerson: Word('наломаю', 5),
  singular2ndPerson: Word('наломаешь', 5),
  singular3rdPerson: Word('наломает', 5),
  plural1stPerson: Word('наломаем', 5),
  plural2ndPerson: Word('наломаете', 5),
  plural3rdPerson: Word('наломают', 5),
  masculinePast: Word('наломал', 5),
  femininePast: Word('наломала', 5),
  neuterPast: Word('наломало', 5),
  pluralPast: Word('наломали', 5),
  imperativeInformal: Word('наломай', 5),
  imperativeFormal: Word('наломайте', 5),
  imperfect: [],
};

perfectVerbs.set(наломать.name.text, наломать);

export { наломать };