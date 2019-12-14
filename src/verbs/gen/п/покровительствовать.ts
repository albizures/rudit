import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покровительствовать: PerfectVerb = {
  name: Word('покровительствовать', 6),
  singular1stPerson: Word('покровительствую', 6),
  singular2ndPerson: Word('покровительствуешь', 6),
  singular3rdPerson: Word('покровительствует', 6),
  plural1stPerson: Word('покровительствуем', 6),
  plural2ndPerson: Word('покровительствуете', 6),
  plural3rdPerson: Word('покровительствуют', 6),
  masculinePast: Word('покровительствовал', 6),
  femininePast: Word('покровительствовала', 6),
  neuterPast: Word('покровительствовало', 6),
  pluralPast: Word('покровительствовали', 6),
  imperativeInformal: Word('покровительствуй', 6),
  imperativeFormal: Word('покровительствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(покровительствовать.name.text, покровительствовать);

export { покровительствовать };