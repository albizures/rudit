import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрясть: PerfectVerb = {
  name: Word('спрясть', 3),
  singular1stPerson: Word('спряду', 5),
  singular2ndPerson: Word('спрядёшь', 3),
  singular3rdPerson: Word('спрядёт', 3),
  plural1stPerson: Word('спрядём', 3),
  plural2ndPerson: Word('спрядёте', 7),
  plural3rdPerson: Word('спрядут', 5),
  masculinePast: Word('спрял', 3),
  femininePast: Word('спряла', 3),
  neuterPast: Word('спряло', 3),
  pluralPast: Word('спряли', 3),
  imperativeInformal: Word('спряди', 5),
  imperativeFormal: Word('спрядите', 5),
  imperfect: ['прясть'],
};

perfectVerbs.set(спрясть.name.text, спрясть);

export { спрясть };