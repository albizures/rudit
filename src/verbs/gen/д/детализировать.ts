import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const детализировать: PerfectVerb = {
  name: Word('детализировать', 7),
  singular1stPerson: Word('детализирую', 7),
  singular2ndPerson: Word('детализируешь', 7),
  singular3rdPerson: Word('детализирует', 7),
  plural1stPerson: Word('детализируем', 7),
  plural2ndPerson: Word('детализируете', 7),
  plural3rdPerson: Word('детализируют', 7),
  masculinePast: Word('детализировал', 7),
  femininePast: Word('детализировала', 7),
  neuterPast: Word('детализировало', 7),
  pluralPast: Word('детализировали', 7),
  imperativeInformal: Word('детализируй', 7),
  imperativeFormal: Word('детализируйте', 7),
  imperfect: [],
};

perfectVerbs.set(детализировать.name.text, детализировать);

export { детализировать };