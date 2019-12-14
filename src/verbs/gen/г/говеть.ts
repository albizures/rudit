import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const говеть: PerfectVerb = {
  name: Word('говеть', 3),
  singular1stPerson: Word('говею', 3),
  singular2ndPerson: Word('говеешь', 3),
  singular3rdPerson: Word('говеет', 3),
  plural1stPerson: Word('говеем', 3),
  plural2ndPerson: Word('говеете', 3),
  plural3rdPerson: Word('говеют', 3),
  masculinePast: Word('говел', 3),
  femininePast: Word('говела', 3),
  neuterPast: Word('говело', 3),
  pluralPast: Word('говели', 3),
  imperativeInformal: Word('говей', 3),
  imperativeFormal: Word('говейте', 3),
  imperfect: [],
};

perfectVerbs.set(говеть.name.text, говеть);

export { говеть };