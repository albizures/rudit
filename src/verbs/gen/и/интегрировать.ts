import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интегрировать: PerfectVerb = {
  name: Word('интегрировать', 6),
  singular1stPerson: Word('интегрирую', 6),
  singular2ndPerson: Word('интегрируешь', 6),
  singular3rdPerson: Word('интегрирует', 6),
  plural1stPerson: Word('интегрируем', 6),
  plural2ndPerson: Word('интегрируете', 6),
  plural3rdPerson: Word('интегрируют', 6),
  masculinePast: Word('интегрировал', 6),
  femininePast: Word('интегрировала', 6),
  neuterPast: Word('интегрировало', 6),
  pluralPast: Word('интегрировали', 6),
  imperativeInformal: Word('интегрируй', 6),
  imperativeFormal: Word('интегрируйте', 6),
  imperfect: [],
};

perfectVerbs.set(интегрировать.name.text, интегрировать);

export { интегрировать };