import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const представительствовать: PerfectVerb = {
  name: Word('представительствовать', 8),
  singular1stPerson: Word('представительствую', 8),
  singular2ndPerson: Word('представительствуешь', 8),
  singular3rdPerson: Word('представительствует', 8),
  plural1stPerson: Word('представительствуем', 8),
  plural2ndPerson: Word('представительствуете', 8),
  plural3rdPerson: Word('представительствуют', 8),
  masculinePast: Word('представительствовал', 8),
  femininePast: Word('представительствовала', 8),
  neuterPast: Word('представительствовало', 8),
  pluralPast: Word('представительствовали', 8),
  imperativeInformal: Word('представительствуй', 8),
  imperativeFormal: Word('представительствуйте', 8),
  imperfect: [],
};

perfectVerbs.set(представительствовать.name.text, представительствовать);

export { представительствовать };