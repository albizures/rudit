import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const госпитализировать: PerfectVerb = {
  name: Word('госпитализировать', 10),
  singular1stPerson: Word('госпитализирую', 10),
  singular2ndPerson: Word('госпитализируешь', 10),
  singular3rdPerson: Word('госпитализирует', 10),
  plural1stPerson: Word('госпитализируем', 10),
  plural2ndPerson: Word('госпитализируете', 10),
  plural3rdPerson: Word('госпитализируют', 10),
  masculinePast: Word('госпитализировал', 10),
  femininePast: Word('госпитализировала', 10),
  neuterPast: Word('госпитализировало', 10),
  pluralPast: Word('госпитализировали', 10),
  imperativeInformal: Word('госпитализируй', 10),
  imperativeFormal: Word('госпитализируйте', 10),
  imperfect: [],
};

perfectVerbs.set(госпитализировать.name.text, госпитализировать);

export { госпитализировать };