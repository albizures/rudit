import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запеленать: PerfectVerb = {
  name: Word('запеленать', 7),
  singular1stPerson: Word('запеленаю', 7),
  singular2ndPerson: Word('запеленаешь', 7),
  singular3rdPerson: Word('запеленает', 7),
  plural1stPerson: Word('запеленаем', 7),
  plural2ndPerson: Word('запеленаете', 7),
  plural3rdPerson: Word('запеленают', 7),
  masculinePast: Word('запеленал', 7),
  femininePast: Word('запеленала', 7),
  neuterPast: Word('запеленало', 7),
  pluralPast: Word('запеленали', 7),
  imperativeInformal: Word('запеленай', 7),
  imperativeFormal: Word('запеленайте', 7),
  imperfect: [],
};

perfectVerbs.set(запеленать.name.text, запеленать);

export { запеленать };