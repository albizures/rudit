import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нервировать: PerfectVerb = {
  name: Word('нервировать', 4),
  singular1stPerson: Word('нервирую', 4),
  singular2ndPerson: Word('нервируешь', 4),
  singular3rdPerson: Word('нервирует', 4),
  plural1stPerson: Word('нервируем', 4),
  plural2ndPerson: Word('нервируете', 4),
  plural3rdPerson: Word('нервируют', 4),
  masculinePast: Word('нервировал', 4),
  femininePast: Word('нервировала', 4),
  neuterPast: Word('нервировало', 4),
  pluralPast: Word('нервировали', 4),
  imperativeInformal: Word('нервируй', 4),
  imperativeFormal: Word('нервируйте', 4),
  imperfect: [],
};

perfectVerbs.set(нервировать.name.text, нервировать);

export { нервировать };