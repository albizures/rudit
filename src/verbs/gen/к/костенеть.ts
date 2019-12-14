import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const костенеть: PerfectVerb = {
  name: Word('костенеть', 6),
  singular1stPerson: Word('костенею', 6),
  singular2ndPerson: Word('костенеешь', 6),
  singular3rdPerson: Word('костенеет', 6),
  plural1stPerson: Word('костенеем', 6),
  plural2ndPerson: Word('костенеете', 6),
  plural3rdPerson: Word('костенеют', 6),
  masculinePast: Word('костенел', 6),
  femininePast: Word('костенела', 6),
  neuterPast: Word('костенело', 6),
  pluralPast: Word('костенели', 6),
  imperativeInformal: Word('костеней', 6),
  imperativeFormal: Word('костенейте', 6),
  imperfect: [],
};

perfectVerbs.set(костенеть.name.text, костенеть);

export { костенеть };