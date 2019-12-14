import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const презентовать: PerfectVerb = {
  name: Word('презентовать', 9),
  singular1stPerson: Word('презентую', 7),
  singular2ndPerson: Word('презентуешь', 7),
  singular3rdPerson: Word('презентует', 7),
  plural1stPerson: Word('презентуем', 7),
  plural2ndPerson: Word('презентуете', 7),
  plural3rdPerson: Word('презентуют', 7),
  masculinePast: Word('презентовал', 9),
  femininePast: Word('презентовала', 9),
  neuterPast: Word('презентовало', 9),
  pluralPast: Word('презентовали', 9),
  imperativeInformal: Word('презентуй', 7),
  imperativeFormal: Word('презентуйте', 7),
  imperfect: [],
};

perfectVerbs.set(презентовать.name.text, презентовать);

export { презентовать };