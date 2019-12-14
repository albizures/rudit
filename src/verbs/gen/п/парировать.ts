import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const парировать: PerfectVerb = {
  name: Word('парировать', 3),
  singular1stPerson: Word('парирую', 3),
  singular2ndPerson: Word('парируешь', 3),
  singular3rdPerson: Word('парирует', 3),
  plural1stPerson: Word('парируем', 3),
  plural2ndPerson: Word('парируете', 3),
  plural3rdPerson: Word('парируют', 3),
  masculinePast: Word('парировал', 3),
  femininePast: Word('парировала', 3),
  neuterPast: Word('парировало', 3),
  pluralPast: Word('парировали', 3),
  imperativeInformal: Word('парируй', 3),
  imperativeFormal: Word('парируйте', 3),
  imperfect: [],
};

perfectVerbs.set(парировать.name.text, парировать);

export { парировать };