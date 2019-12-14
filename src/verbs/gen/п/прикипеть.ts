import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикипеть: PerfectVerb = {
  name: Word('прикипеть', 6),
  singular1stPerson: Word('прикиплю', 7),
  singular2ndPerson: Word('прикипишь', 6),
  singular3rdPerson: Word('прикипит', 6),
  plural1stPerson: Word('прикипим', 6),
  plural2ndPerson: Word('прикипите', 6),
  plural3rdPerson: Word('прикипят', 6),
  masculinePast: Word('прикипел', 6),
  femininePast: Word('прикипела', 6),
  neuterPast: Word('прикипело', 6),
  pluralPast: Word('прикипели', 6),
  imperativeInformal: Word('прикипи', 6),
  imperativeFormal: Word('прикипите', 6),
  imperfect: [],
};

perfectVerbs.set(прикипеть.name.text, прикипеть);

export { прикипеть };