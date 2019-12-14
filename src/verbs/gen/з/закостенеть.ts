import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закостенеть: PerfectVerb = {
  name: Word('закостенеть', 8),
  singular1stPerson: Word('закостенею', 8),
  singular2ndPerson: Word('закостенеешь', 8),
  singular3rdPerson: Word('закостенеет', 8),
  plural1stPerson: Word('закостенеем', 8),
  plural2ndPerson: Word('закостенеете', 8),
  plural3rdPerson: Word('закостенеют', 8),
  masculinePast: Word('закостенел', 8),
  femininePast: Word('закостенела', 8),
  neuterPast: Word('закостенело', 8),
  pluralPast: Word('закостенели', 8),
  imperativeInformal: Word('закостеней', 8),
  imperativeFormal: Word('закостенейте', 8),
  imperfect: [],
};

perfectVerbs.set(закостенеть.name.text, закостенеть);

export { закостенеть };