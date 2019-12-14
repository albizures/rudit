import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благоденствовать: PerfectVerb = {
  name: Word('благоденствовать', 6),
  singular1stPerson: Word('благоденствую', 6),
  singular2ndPerson: Word('благоденствуешь', 6),
  singular3rdPerson: Word('благоденствует', 6),
  plural1stPerson: Word('благоденствуем', 6),
  plural2ndPerson: Word('благоденствуете', 6),
  plural3rdPerson: Word('благоденствуют', 6),
  masculinePast: Word('благоденствовал', 6),
  femininePast: Word('благоденствовала', 6),
  neuterPast: Word('благоденствовало', 6),
  pluralPast: Word('благоденствовали', 6),
  imperativeInformal: Word('благоденствуй', 6),
  imperativeFormal: Word('благоденствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(благоденствовать.name.text, благоденствовать);

export { благоденствовать };