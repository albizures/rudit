import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const специализировать: PerfectVerb = {
  name: Word('специализировать', 9),
  singular1stPerson: Word('специализирую', 9),
  singular2ndPerson: Word('специализируешь', 9),
  singular3rdPerson: Word('специализирует', 9),
  plural1stPerson: Word('специализируем', 9),
  plural2ndPerson: Word('специализируете', 9),
  plural3rdPerson: Word('специализируют', 9),
  masculinePast: Word('специализировал', 9),
  femininePast: Word('специализировала', 9),
  neuterPast: Word('специализировало', 9),
  pluralPast: Word('специализировали', 9),
  imperativeInformal: Word('специализируй', 9),
  imperativeFormal: Word('специализируйте', 9),
  imperfect: [],
};

perfectVerbs.set(специализировать.name.text, специализировать);

export { специализировать };