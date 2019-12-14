import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкипеть: PerfectVerb = {
  name: Word('выкипеть', 1),
  singular1stPerson: Word('выкиплю', 1),
  singular2ndPerson: Word('выкипишь', 1),
  singular3rdPerson: Word('выкипит', 1),
  plural1stPerson: Word('выкипим', 1),
  plural2ndPerson: Word('выкипите', 1),
  plural3rdPerson: Word('выкипят', 1),
  masculinePast: Word('выкипел', 1),
  femininePast: Word('выкипела', 1),
  neuterPast: Word('выкипело', 1),
  pluralPast: Word('выкипели', 1),
  imperativeInformal: Word('выкипи', 1),
  imperativeFormal: Word('выкипите', 1),
  imperfect: [],
};

perfectVerbs.set(выкипеть.name.text, выкипеть);

export { выкипеть };