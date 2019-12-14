import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const препятствовать: PerfectVerb = {
  name: Word('препятствовать', 4),
  singular1stPerson: Word('препятствую', 4),
  singular2ndPerson: Word('препятствуешь', 4),
  singular3rdPerson: Word('препятствует', 4),
  plural1stPerson: Word('препятствуем', 4),
  plural2ndPerson: Word('препятствуете', 4),
  plural3rdPerson: Word('препятствуют', 4),
  masculinePast: Word('препятствовал', 4),
  femininePast: Word('препятствовала', 4),
  neuterPast: Word('препятствовало', 4),
  pluralPast: Word('препятствовали', 4),
  imperativeInformal: Word('препятствуй', 4),
  imperativeFormal: Word('препятствуйте', 4),
  imperfect: ['воспрепятствовать'],
};

perfectVerbs.set(препятствовать.name.text, препятствовать);

export { препятствовать };