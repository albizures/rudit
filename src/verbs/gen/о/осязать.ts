import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осязать: PerfectVerb = {
  name: Word('осязать', 4),
  singular1stPerson: Word('осязаю', 4),
  singular2ndPerson: Word('осязаешь', 4),
  singular3rdPerson: Word('осязает', 4),
  plural1stPerson: Word('осязаем', 4),
  plural2ndPerson: Word('осязаете', 4),
  plural3rdPerson: Word('осязают', 4),
  masculinePast: Word('осязал', 4),
  femininePast: Word('осязала', 4),
  neuterPast: Word('осязало', 4),
  pluralPast: Word('осязали', 4),
  imperativeInformal: Word('осязай', 4),
  imperativeFormal: Word('осязайте', 4),
  imperfect: [],
};

perfectVerbs.set(осязать.name.text, осязать);

export { осязать };