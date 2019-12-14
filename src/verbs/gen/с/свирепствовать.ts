import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свирепствовать: PerfectVerb = {
  name: Word('свирепствовать', 4),
  singular1stPerson: Word('свирепствую', 4),
  singular2ndPerson: Word('свирепствуешь', 4),
  singular3rdPerson: Word('свирепствует', 4),
  plural1stPerson: Word('свирепствуем', 4),
  plural2ndPerson: Word('свирепствуете', 4),
  plural3rdPerson: Word('свирепствуют', 4),
  masculinePast: Word('свирепствовал', 4),
  femininePast: Word('свирепствовала', 4),
  neuterPast: Word('свирепствовало', 4),
  pluralPast: Word('свирепствовали', 4),
  imperativeInformal: Word('свирепствуй', 4),
  imperativeFormal: Word('свирепствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(свирепствовать.name.text, свирепствовать);

export { свирепствовать };