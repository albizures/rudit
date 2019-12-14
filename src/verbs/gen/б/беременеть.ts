import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беременеть: PerfectVerb = {
  name: Word('беременеть', 3),
  singular1stPerson: Word('беременею', 3),
  singular2ndPerson: Word('беременеешь', 3),
  singular3rdPerson: Word('беременеет', 3),
  plural1stPerson: Word('беременеем', 3),
  plural2ndPerson: Word('беременеете', 3),
  plural3rdPerson: Word('беременеют', 3),
  masculinePast: Word('беременел', 3),
  femininePast: Word('беременела', 3),
  neuterPast: Word('беременело', 3),
  pluralPast: Word('беременели', 3),
  imperativeInformal: Word('беременей', 3),
  imperativeFormal: Word('беременейте', 3),
  imperfect: [],
};

perfectVerbs.set(беременеть.name.text, беременеть);

export { беременеть };