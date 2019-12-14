import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крестьянствовать: PerfectVerb = {
  name: Word('крестьянствовать', 6),
  singular1stPerson: Word('крестьянствую', 6),
  singular2ndPerson: Word('крестьянствуешь', 6),
  singular3rdPerson: Word('крестьянствует', 6),
  plural1stPerson: Word('крестьянствуем', 6),
  plural2ndPerson: Word('крестьянствуете', 6),
  plural3rdPerson: Word('крестьянствуют', 6),
  masculinePast: Word('крестьянствовал', 6),
  femininePast: Word('крестьянствовала', 6),
  neuterPast: Word('крестьянствовало', 6),
  pluralPast: Word('крестьянствовали', 6),
  imperativeInformal: Word('крестьянствуй', 6),
  imperativeFormal: Word('крестьянствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(крестьянствовать.name.text, крестьянствовать);

export { крестьянствовать };