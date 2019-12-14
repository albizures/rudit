import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жительствовать: PerfectVerb = {
  name: Word('жительствовать', 1),
  singular1stPerson: Word('жительствую', 1),
  singular2ndPerson: Word('жительствуешь', 1),
  singular3rdPerson: Word('жительствует', 1),
  plural1stPerson: Word('жительствуем', 1),
  plural2ndPerson: Word('жительствуете', 1),
  plural3rdPerson: Word('жительствуют', 1),
  masculinePast: Word('жительствовал', 1),
  femininePast: Word('жительствовала', 1),
  neuterPast: Word('жительствовало', 1),
  pluralPast: Word('жительствовали', 1),
  imperativeInformal: Word('жительствуй', 1),
  imperativeFormal: Word('жительствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(жительствовать.name.text, жительствовать);

export { жительствовать };