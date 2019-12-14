import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрямствовать: PerfectVerb = {
  name: Word('упрямствовать', 3),
  singular1stPerson: Word('упрямствую', 3),
  singular2ndPerson: Word('упрямствуешь', 3),
  singular3rdPerson: Word('упрямствует', 3),
  plural1stPerson: Word('упрямствуем', 3),
  plural2ndPerson: Word('упрямствуете', 3),
  plural3rdPerson: Word('упрямствуют', 3),
  masculinePast: Word('упрямствовал', 3),
  femininePast: Word('упрямствовала', 3),
  neuterPast: Word('упрямствовало', 3),
  pluralPast: Word('упрямствовали', 3),
  imperativeInformal: Word('упрямствуй', 3),
  imperativeFormal: Word('упрямствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(упрямствовать.name.text, упрямствовать);

export { упрямствовать };