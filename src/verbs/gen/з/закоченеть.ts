import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закоченеть: PerfectVerb = {
  name: Word('закоченеть', 7),
  singular1stPerson: Word('закоченею', 7),
  singular2ndPerson: Word('закоченеешь', 7),
  singular3rdPerson: Word('закоченеет', 7),
  plural1stPerson: Word('закоченеем', 7),
  plural2ndPerson: Word('закоченеете', 7),
  plural3rdPerson: Word('закоченеют', 7),
  masculinePast: Word('закоченел', 7),
  femininePast: Word('закоченела', 7),
  neuterPast: Word('закоченело', 7),
  pluralPast: Word('закоченели', 7),
  imperativeInformal: Word('закоченей', 7),
  imperativeFormal: Word('закоченейте', 7),
  imperfect: [],
};

perfectVerbs.set(закоченеть.name.text, закоченеть);

export { закоченеть };