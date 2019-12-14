import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const капитализировать: PerfectVerb = {
  name: Word('капитализировать', 9),
  singular1stPerson: Word('капитализирую', 9),
  singular2ndPerson: Word('капитализируешь', 9),
  singular3rdPerson: Word('капитализирует', 9),
  plural1stPerson: Word('капитализируем', 9),
  plural2ndPerson: Word('капитализируете', 9),
  plural3rdPerson: Word('капитализируют', 9),
  masculinePast: Word('капитализировал', 9),
  femininePast: Word('капитализировала', 9),
  neuterPast: Word('капитализировало', 9),
  pluralPast: Word('капитализировали', 9),
  imperativeInformal: Word('капитализируй', 9),
  imperativeFormal: Word('капитализируйте', 9),
  imperfect: [],
};

perfectVerbs.set(капитализировать.name.text, капитализировать);

export { капитализировать };