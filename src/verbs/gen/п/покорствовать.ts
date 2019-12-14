import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покорствовать: PerfectVerb = {
  name: Word('покорствовать', 3),
  singular1stPerson: Word('покорствую', 3),
  singular2ndPerson: Word('покорствуешь', 3),
  singular3rdPerson: Word('покорствует', 3),
  plural1stPerson: Word('покорствуем', 3),
  plural2ndPerson: Word('покорствуете', 3),
  plural3rdPerson: Word('покорствуют', 3),
  masculinePast: Word('покорствовал', 3),
  femininePast: Word('покорствовала', 3),
  neuterPast: Word('покорствовало', 3),
  pluralPast: Word('покорствовали', 3),
  imperativeInformal: Word('покорствуй', 3),
  imperativeFormal: Word('покорствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(покорствовать.name.text, покорствовать);

export { покорствовать };