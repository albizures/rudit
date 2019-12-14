import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подействовать: PerfectVerb = {
  name: Word('подействовать', 3),
  singular1stPerson: Word('подействую', 3),
  singular2ndPerson: Word('подействуешь', 3),
  singular3rdPerson: Word('подействует', 3),
  plural1stPerson: Word('подействуем', 3),
  plural2ndPerson: Word('подействуете', 3),
  plural3rdPerson: Word('подействуют', 3),
  masculinePast: Word('подействовал', 3),
  femininePast: Word('подействовала', 3),
  neuterPast: Word('подействовало', 3),
  pluralPast: Word('подействовали', 3),
  imperativeInformal: Word('подействуй', 3),
  imperativeFormal: Word('подействуйте', 3),
  imperfect: [],
};

perfectVerbs.set(подействовать.name.text, подействовать);

export { подействовать };