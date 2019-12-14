import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрослеть: PerfectVerb = {
  name: Word('взрослеть', 6),
  singular1stPerson: Word('взрослею', 6),
  singular2ndPerson: Word('взрослеешь', 6),
  singular3rdPerson: Word('взрослеет', 6),
  plural1stPerson: Word('взрослеем', 6),
  plural2ndPerson: Word('взрослеете', 6),
  plural3rdPerson: Word('взрослеют', 6),
  masculinePast: Word('взрослел', 6),
  femininePast: Word('взрослела', 6),
  neuterPast: Word('взрослело', 6),
  pluralPast: Word('взрослели', 6),
  imperativeInformal: Word('взрослей', 6),
  imperativeFormal: Word('взрослейте', 6),
  imperfect: [],
};

perfectVerbs.set(взрослеть.name.text, взрослеть);

export { взрослеть };