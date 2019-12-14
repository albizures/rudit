import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зверствовать: PerfectVerb = {
  name: Word('зверствовать', 2),
  singular1stPerson: Word('зверствую', 2),
  singular2ndPerson: Word('зверствуешь', 2),
  singular3rdPerson: Word('зверствует', 2),
  plural1stPerson: Word('зверствуем', 2),
  plural2ndPerson: Word('зверствуете', 2),
  plural3rdPerson: Word('зверствуют', 2),
  masculinePast: Word('зверствовал', 2),
  femininePast: Word('зверствовала', 2),
  neuterPast: Word('зверствовало', 2),
  pluralPast: Word('зверствовали', 2),
  imperativeInformal: Word('зверствуй', 2),
  imperativeFormal: Word('зверствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(зверствовать.name.text, зверствовать);

export { зверствовать };