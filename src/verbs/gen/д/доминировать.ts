import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доминировать: PerfectVerb = {
  name: Word('доминировать', 5),
  singular1stPerson: Word('доминирую', 5),
  singular2ndPerson: Word('доминируешь', 5),
  singular3rdPerson: Word('доминирует', 5),
  plural1stPerson: Word('доминируем', 5),
  plural2ndPerson: Word('доминируете', 5),
  plural3rdPerson: Word('доминируют', 5),
  masculinePast: Word('доминировал', 5),
  femininePast: Word('доминировала', 5),
  neuterPast: Word('доминировало', 5),
  pluralPast: Word('доминировали', 5),
  imperativeInformal: Word('доминируй', 5),
  imperativeFormal: Word('доминируйте', 5),
  imperfect: [],
};

perfectVerbs.set(доминировать.name.text, доминировать);

export { доминировать };