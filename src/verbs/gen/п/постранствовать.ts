import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постранствовать: PerfectVerb = {
  name: Word('постранствовать', 5),
  singular1stPerson: Word('постранствую', 5),
  singular2ndPerson: Word('постранствуешь', 5),
  singular3rdPerson: Word('постранствует', 5),
  plural1stPerson: Word('постранствуем', 5),
  plural2ndPerson: Word('постранствуете', 5),
  plural3rdPerson: Word('постранствуют', 5),
  masculinePast: Word('постранствовал', 5),
  femininePast: Word('постранствовала', 5),
  neuterPast: Word('постранствовало', 5),
  pluralPast: Word('постранствовали', 5),
  imperativeInformal: Word('постранствуй', 5),
  imperativeFormal: Word('постранствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(постранствовать.name.text, постранствовать);

export { постранствовать };