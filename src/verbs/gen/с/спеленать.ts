import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спеленать: PerfectVerb = {
  name: Word('спеленать', 6),
  singular1stPerson: Word('спеленаю', 6),
  singular2ndPerson: Word('спеленаешь', 6),
  singular3rdPerson: Word('спеленает', 6),
  plural1stPerson: Word('спеленаем', 6),
  plural2ndPerson: Word('спеленаете', 6),
  plural3rdPerson: Word('спеленают', 6),
  masculinePast: Word('спеленал', 6),
  femininePast: Word('спеленала', 6),
  neuterPast: Word('спеленало', 6),
  pluralPast: Word('спеленали', 6),
  imperativeInformal: Word('спеленай', 6),
  imperativeFormal: Word('спеленайте', 6),
  imperfect: [],
};

perfectVerbs.set(спеленать.name.text, спеленать);

export { спеленать };