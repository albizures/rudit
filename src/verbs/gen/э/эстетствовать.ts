import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const эстетствовать: PerfectVerb = {
  name: Word('эстетствовать', 3),
  singular1stPerson: Word('эстетствую', 3),
  singular2ndPerson: Word('эстетствуешь', 3),
  singular3rdPerson: Word('эстетствует', 3),
  plural1stPerson: Word('эстетствуем', 3),
  plural2ndPerson: Word('эстетствуете', 3),
  plural3rdPerson: Word('эстетствуют', 3),
  masculinePast: Word('эстетствовал', 3),
  femininePast: Word('эстетствовала', 3),
  neuterPast: Word('эстетствовало', 3),
  pluralPast: Word('эстетствовали', 3),
  imperativeInformal: Word('эстетствуй', 3),
  imperativeFormal: Word('эстетствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(эстетствовать.name.text, эстетствовать);

export { эстетствовать };