import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спеть: PerfectVerb = {
  name: Word('спеть', 2),
  singular1stPerson: Word('спею', 2),
  singular2ndPerson: Word('спеешь', 2),
  singular3rdPerson: Word('спеет', 2),
  plural1stPerson: Word('спеем', 2),
  plural2ndPerson: Word('спеете', 2),
  plural3rdPerson: Word('спеют', 2),
  masculinePast: Word('спел', 2),
  femininePast: Word('спела', 2),
  neuterPast: Word('спело', 2),
  pluralPast: Word('спели', 2),
  imperativeInformal: Word('спей', 2),
  imperativeFormal: Word('спейте', 2),
  imperfect: ['поспеть'],
};

perfectVerbs.set(спеть.name.text, спеть);

export { спеть };