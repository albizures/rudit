import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усердствовать: PerfectVerb = {
  name: Word('усердствовать', 2),
  singular1stPerson: Word('усердствую', 2),
  singular2ndPerson: Word('усердствуешь', 2),
  singular3rdPerson: Word('усердствует', 2),
  plural1stPerson: Word('усердствуем', 2),
  plural2ndPerson: Word('усердствуете', 2),
  plural3rdPerson: Word('усердствуют', 2),
  masculinePast: Word('усердствовал', 2),
  femininePast: Word('усердствовала', 2),
  neuterPast: Word('усердствовало', 2),
  pluralPast: Word('усердствовали', 2),
  imperativeInformal: Word('усердствуй', 2),
  imperativeFormal: Word('усердствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(усердствовать.name.text, усердствовать);

export { усердствовать };