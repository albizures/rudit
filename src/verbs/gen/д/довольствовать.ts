import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довольствовать: PerfectVerb = {
  name: Word('довольствовать', 3),
  singular1stPerson: Word('довольствую', 3),
  singular2ndPerson: Word('довольствуешь', 3),
  singular3rdPerson: Word('довольствует', 3),
  plural1stPerson: Word('довольствуем', 3),
  plural2ndPerson: Word('довольствуете', 3),
  plural3rdPerson: Word('довольствуют', 3),
  masculinePast: Word('довольствовал', 3),
  femininePast: Word('довольствовала', 3),
  neuterPast: Word('довольствовало', 3),
  pluralPast: Word('довольствовали', 3),
  imperativeInformal: Word('довольствуй', 3),
  imperativeFormal: Word('довольствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(довольствовать.name.text, довольствовать);

export { довольствовать };