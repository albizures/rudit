import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const патентовать: PerfectVerb = {
  name: Word('патентовать', 8),
  singular1stPerson: Word('патентую', 6),
  singular2ndPerson: Word('патентуешь', 6),
  singular3rdPerson: Word('патентует', 6),
  plural1stPerson: Word('патентуем', 6),
  plural2ndPerson: Word('патентуете', 6),
  plural3rdPerson: Word('патентуют', 6),
  masculinePast: Word('патентовал', 8),
  femininePast: Word('патентовала', 8),
  neuterPast: Word('патентовало', 8),
  pluralPast: Word('патентовали', 8),
  imperativeInformal: Word('патентуй', 6),
  imperativeFormal: Word('патентуйте', 6),
  imperfect: [],
};

perfectVerbs.set(патентовать.name.text, патентовать);

export { патентовать };