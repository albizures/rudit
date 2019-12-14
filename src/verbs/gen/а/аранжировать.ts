import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аранжировать: PerfectVerb = {
  name: Word('аранжировать', 5),
  singular1stPerson: Word('аранжирую', 5),
  singular2ndPerson: Word('аранжируешь', 5),
  singular3rdPerson: Word('аранжирует', 5),
  plural1stPerson: Word('аранжируем', 5),
  plural2ndPerson: Word('аранжируете', 5),
  plural3rdPerson: Word('аранжируют', 5),
  masculinePast: Word('аранжировал', 5),
  femininePast: Word('аранжировала', 5),
  neuterPast: Word('аранжировало', 5),
  pluralPast: Word('аранжировали', 5),
  imperativeInformal: Word('аранжируй', 5),
  imperativeFormal: Word('аранжируйте', 5),
  imperfect: [],
};

perfectVerbs.set(аранжировать.name.text, аранжировать);

export { аранжировать };