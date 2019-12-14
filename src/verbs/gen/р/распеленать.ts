import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распеленать: PerfectVerb = {
  name: Word('распеленать', 8),
  singular1stPerson: Word('распеленаю', 8),
  singular2ndPerson: Word('распеленаешь', 8),
  singular3rdPerson: Word('распеленает', 8),
  plural1stPerson: Word('распеленаем', 8),
  plural2ndPerson: Word('распеленаете', 8),
  plural3rdPerson: Word('распеленают', 8),
  masculinePast: Word('распеленал', 8),
  femininePast: Word('распеленала', 8),
  neuterPast: Word('распеленало', 8),
  pluralPast: Word('распеленали', 8),
  imperativeInformal: Word('распеленай', 8),
  imperativeFormal: Word('распеленайте', 8),
  imperfect: [],
};

perfectVerbs.set(распеленать.name.text, распеленать);

export { распеленать };