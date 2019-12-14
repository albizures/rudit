import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благоприятствовать: PerfectVerb = {
  name: Word('благоприятствовать', 8),
  singular1stPerson: Word('благоприятствую', 8),
  singular2ndPerson: Word('благоприятствуешь', 8),
  singular3rdPerson: Word('благоприятствует', 8),
  plural1stPerson: Word('благоприятствуем', 8),
  plural2ndPerson: Word('благоприятствуете', 8),
  plural3rdPerson: Word('благоприятствуют', 8),
  masculinePast: Word('благоприятствовал', 8),
  femininePast: Word('благоприятствовала', 8),
  neuterPast: Word('благоприятствовало', 8),
  pluralPast: Word('благоприятствовали', 8),
  imperativeInformal: Word('благоприятствуй', 8),
  imperativeFormal: Word('благоприятствуйте', 8),
  imperfect: [],
};

perfectVerbs.set(благоприятствовать.name.text, благоприятствовать);

export { благоприятствовать };