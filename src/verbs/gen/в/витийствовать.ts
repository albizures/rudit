import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const витийствовать: PerfectVerb = {
  name: Word('витийствовать', 3),
  singular1stPerson: Word('витийствую', 3),
  singular2ndPerson: Word('витийствуешь', 3),
  singular3rdPerson: Word('витийствует', 3),
  plural1stPerson: Word('витийствуем', 3),
  plural2ndPerson: Word('витийствуете', 3),
  plural3rdPerson: Word('витийствуют', 3),
  masculinePast: Word('витийствовал', 3),
  femininePast: Word('витийствовала', 3),
  neuterPast: Word('витийствовало', 3),
  pluralPast: Word('витийствовали', 3),
  imperativeInformal: Word('витийствуй', 3),
  imperativeFormal: Word('витийствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(витийствовать.name.text, витийствовать);

export { витийствовать };