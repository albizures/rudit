import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const национализировать: PerfectVerb = {
  name: Word('национализировать', 10),
  singular1stPerson: Word('национализирую', 10),
  singular2ndPerson: Word('национализируешь', 10),
  singular3rdPerson: Word('национализирует', 10),
  plural1stPerson: Word('национализируем', 10),
  plural2ndPerson: Word('национализируете', 10),
  plural3rdPerson: Word('национализируют', 10),
  masculinePast: Word('национализировал', 10),
  femininePast: Word('национализировала', 10),
  neuterPast: Word('национализировало', 10),
  pluralPast: Word('национализировали', 10),
  imperativeInformal: Word('национализируй', 10),
  imperativeFormal: Word('национализируйте', 10),
  imperfect: [],
};

perfectVerbs.set(национализировать.name.text, национализировать);

export { национализировать };