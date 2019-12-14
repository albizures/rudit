import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загустеть: PerfectVerb = {
  name: Word('загустеть', 6),
  singular1stPerson: Word('загустею', 6),
  singular2ndPerson: Word('загустеешь', 6),
  singular3rdPerson: Word('загустеет', 6),
  plural1stPerson: Word('загустеем', 6),
  plural2ndPerson: Word('загустеете', 6),
  plural3rdPerson: Word('загустеют', 6),
  masculinePast: Word('загустел', 6),
  femininePast: Word('загустела', 6),
  neuterPast: Word('загустело', 6),
  pluralPast: Word('загустели', 6),
  imperativeInformal: Word('загустей', 6),
  imperativeFormal: Word('загустейте', 6),
  imperfect: [],
};

perfectVerbs.set(загустеть.name.text, загустеть);

export { загустеть };