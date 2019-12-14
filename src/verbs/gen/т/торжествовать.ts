import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торжествовать: PerfectVerb = {
  name: Word('торжествовать', 10),
  singular1stPerson: Word('торжествую', 8),
  singular2ndPerson: Word('торжествуешь', 8),
  singular3rdPerson: Word('торжествует', 8),
  plural1stPerson: Word('торжествуем', 8),
  plural2ndPerson: Word('торжествуете', 8),
  plural3rdPerson: Word('торжествуют', 8),
  masculinePast: Word('торжествовал', 10),
  femininePast: Word('торжествовала', 10),
  neuterPast: Word('торжествовало', 10),
  pluralPast: Word('торжествовали', 10),
  imperativeInformal: Word('торжествуй', 8),
  imperativeFormal: Word('торжествуйте', 8),
  imperfect: [],
};

perfectVerbs.set(торжествовать.name.text, торжествовать);

export { торжествовать };