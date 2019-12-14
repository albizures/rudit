import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const персонализировать: PerfectVerb = {
  name: Word('персонализировать', 10),
  singular1stPerson: Word('персонализирую', 10),
  singular2ndPerson: Word('персонализируешь', 10),
  singular3rdPerson: Word('персонализирует', 10),
  plural1stPerson: Word('персонализируем', 10),
  plural2ndPerson: Word('персонализируете', 10),
  plural3rdPerson: Word('персонализируют', 10),
  masculinePast: Word('персонализировал', 10),
  femininePast: Word('персонализировала', 10),
  neuterPast: Word('персонализировало', 10),
  pluralPast: Word('персонализировали', 10),
  imperativeInformal: Word('персонализируй', 10),
  imperativeFormal: Word('персонализируйте', 10),
  imperfect: [],
};

perfectVerbs.set(персонализировать.name.text, персонализировать);

export { персонализировать };