import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комплектовать: PerfectVerb = {
  name: Word('комплектовать', 10),
  singular1stPerson: Word('комплектую', 8),
  singular2ndPerson: Word('комплектуешь', 8),
  singular3rdPerson: Word('комплектует', 8),
  plural1stPerson: Word('комплектуем', 8),
  plural2ndPerson: Word('комплектуете', 8),
  plural3rdPerson: Word('комплектуют', 8),
  masculinePast: Word('комплектовал', 10),
  femininePast: Word('комплектовала', 10),
  neuterPast: Word('комплектовало', 10),
  pluralPast: Word('комплектовали', 10),
  imperativeInformal: Word('комплектуй', 8),
  imperativeFormal: Word('комплектуйте', 8),
  imperfect: [],
};

perfectVerbs.set(комплектовать.name.text, комплектовать);

export { комплектовать };