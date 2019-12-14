import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оледенеть: PerfectVerb = {
  name: Word('оледенеть', 6),
  singular1stPerson: Word('оледенею', 6),
  singular2ndPerson: Word('оледенеешь', 6),
  singular3rdPerson: Word('оледенеет', 6),
  plural1stPerson: Word('оледенеем', 6),
  plural2ndPerson: Word('оледенеете', 6),
  plural3rdPerson: Word('оледенеют', 6),
  masculinePast: Word('оледенел', 6),
  femininePast: Word('оледенела', 6),
  neuterPast: Word('оледенело', 6),
  pluralPast: Word('оледенели', 6),
  imperativeInformal: Word('оледеней', 6),
  imperativeFormal: Word('оледенейте', 6),
  imperfect: [],
};

perfectVerbs.set(оледенеть.name.text, оледенеть);

export { оледенеть };