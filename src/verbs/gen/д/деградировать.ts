import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деградировать: PerfectVerb = {
  name: Word('деградировать', 6),
  singular1stPerson: Word('деградирую', 6),
  singular2ndPerson: Word('деградируешь', 6),
  singular3rdPerson: Word('деградирует', 6),
  plural1stPerson: Word('деградируем', 6),
  plural2ndPerson: Word('деградируете', 6),
  plural3rdPerson: Word('деградируют', 6),
  masculinePast: Word('деградировал', 6),
  femininePast: Word('деградировала', 6),
  neuterPast: Word('деградировало', 6),
  pluralPast: Word('деградировали', 6),
  imperativeInformal: Word('деградируй', 6),
  imperativeFormal: Word('деградируйте', 6),
  imperfect: [],
};

perfectVerbs.set(деградировать.name.text, деградировать);

export { деградировать };