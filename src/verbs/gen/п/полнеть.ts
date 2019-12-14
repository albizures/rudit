import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полнеть: PerfectVerb = {
  name: Word('полнеть', 4),
  singular1stPerson: Word('полнею', 4),
  singular2ndPerson: Word('полнеешь', 4),
  singular3rdPerson: Word('полнеет', 4),
  plural1stPerson: Word('полнеем', 4),
  plural2ndPerson: Word('полнеете', 4),
  plural3rdPerson: Word('полнеют', 4),
  masculinePast: Word('полнел', 4),
  femininePast: Word('полнела', 4),
  neuterPast: Word('полнело', 4),
  pluralPast: Word('полнели', 4),
  imperativeInformal: Word('полней', 4),
  imperativeFormal: Word('полнейте', 4),
  imperfect: [],
};

perfectVerbs.set(полнеть.name.text, полнеть);

export { полнеть };