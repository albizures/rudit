import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцепенеть: PerfectVerb = {
  name: Word('оцепенеть', 6),
  singular1stPerson: Word('оцепенею', 6),
  singular2ndPerson: Word('оцепенеешь', 6),
  singular3rdPerson: Word('оцепенеет', 6),
  plural1stPerson: Word('оцепенеем', 6),
  plural2ndPerson: Word('оцепенеете', 6),
  plural3rdPerson: Word('оцепенеют', 6),
  masculinePast: Word('оцепенел', 6),
  femininePast: Word('оцепенела', 6),
  neuterPast: Word('оцепенело', 6),
  pluralPast: Word('оцепенели', 6),
  imperativeInformal: Word('оцепеней', 6),
  imperativeFormal: Word('оцепенейте', 6),
  imperfect: [],
};

perfectVerbs.set(оцепенеть.name.text, оцепенеть);

export { оцепенеть };