import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрамбовать: PerfectVerb = {
  name: Word('утрамбовать', 8),
  singular1stPerson: Word('утрамбую', 6),
  singular2ndPerson: Word('утрамбуешь', 6),
  singular3rdPerson: Word('утрамбует', 6),
  plural1stPerson: Word('утрамбуем', 6),
  plural2ndPerson: Word('утрамбуете', 6),
  plural3rdPerson: Word('утрамбуют', 6),
  masculinePast: Word('утрамбовал', 8),
  femininePast: Word('утрамбовала', 8),
  neuterPast: Word('утрамбовало', 8),
  pluralPast: Word('утрамбовали', 8),
  imperativeInformal: Word('утрамбуй', 6),
  imperativeFormal: Word('утрамбуйте', 6),
  imperfect: [],
};

perfectVerbs.set(утрамбовать.name.text, утрамбовать);

export { утрамбовать };