import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const канализировать: PerfectVerb = {
  name: Word('канализировать', 7),
  singular1stPerson: Word('канализирую', 7),
  singular2ndPerson: Word('канализируешь', 7),
  singular3rdPerson: Word('канализирует', 7),
  plural1stPerson: Word('канализируем', 7),
  plural2ndPerson: Word('канализируете', 7),
  plural3rdPerson: Word('канализируют', 7),
  masculinePast: Word('канализировал', 7),
  femininePast: Word('канализировала', 7),
  neuterPast: Word('канализировало', 7),
  pluralPast: Word('канализировали', 7),
  imperativeInformal: Word('канализируй', 7),
  imperativeFormal: Word('канализируйте', 7),
  imperfect: [],
};

perfectVerbs.set(канализировать.name.text, канализировать);

export { канализировать };