import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присутствовать: PerfectVerb = {
  name: Word('присутствовать', 4),
  singular1stPerson: Word('присутствую', 4),
  singular2ndPerson: Word('присутствуешь', 4),
  singular3rdPerson: Word('присутствует', 4),
  plural1stPerson: Word('присутствуем', 4),
  plural2ndPerson: Word('присутствуете', 4),
  plural3rdPerson: Word('присутствуют', 4),
  masculinePast: Word('присутствовал', 4),
  femininePast: Word('присутствовала', 4),
  neuterPast: Word('присутствовало', 4),
  pluralPast: Word('присутствовали', 4),
  imperativeInformal: Word('присутствуй', 4),
  imperativeFormal: Word('присутствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(присутствовать.name.text, присутствовать);

export { присутствовать };