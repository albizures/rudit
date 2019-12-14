import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const странствовать: PerfectVerb = {
  name: Word('странствовать', 3),
  singular1stPerson: Word('странствую', 3),
  singular2ndPerson: Word('странствуешь', 3),
  singular3rdPerson: Word('странствует', 3),
  plural1stPerson: Word('странствуем', 3),
  plural2ndPerson: Word('странствуете', 3),
  plural3rdPerson: Word('странствуют', 3),
  masculinePast: Word('странствовал', 3),
  femininePast: Word('странствовала', 3),
  neuterPast: Word('странствовало', 3),
  pluralPast: Word('странствовали', 3),
  imperativeInformal: Word('странствуй', 3),
  imperativeFormal: Word('странствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(странствовать.name.text, странствовать);

export { странствовать };