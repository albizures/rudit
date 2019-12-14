import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рационализировать: PerfectVerb = {
  name: Word('рационализировать', 10),
  singular1stPerson: Word('рационализирую', 10),
  singular2ndPerson: Word('рационализируешь', 10),
  singular3rdPerson: Word('рационализирует', 10),
  plural1stPerson: Word('рационализируем', 10),
  plural2ndPerson: Word('рационализируете', 10),
  plural3rdPerson: Word('рационализируют', 10),
  masculinePast: Word('рационализировал', 10),
  femininePast: Word('рационализировала', 10),
  neuterPast: Word('рационализировало', 10),
  pluralPast: Word('рационализировали', 10),
  imperativeInformal: Word('рационализируй', 10),
  imperativeFormal: Word('рационализируйте', 10),
  imperfect: [],
};

perfectVerbs.set(рационализировать.name.text, рационализировать);

export { рационализировать };