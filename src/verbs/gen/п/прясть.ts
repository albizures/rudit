import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прясть: PerfectVerb = {
  name: Word('прясть', 2),
  singular1stPerson: Word('пряду', 4),
  singular2ndPerson: Word('прядёшь', 4),
  singular3rdPerson: Word('прядёт', 4),
  plural1stPerson: Word('прядём', 4),
  plural2ndPerson: Word('прядёте', 4),
  plural3rdPerson: Word('прядут', 4),
  masculinePast: Word('прял', 2),
  femininePast: Word('пряла', 2),
  neuterPast: Word('пряло', 2),
  pluralPast: Word('пряли', 2),
  imperativeInformal: Word('пряди', 4),
  imperativeFormal: Word('прядите', 4),
  imperfect: ['спрясть'],
};

perfectVerbs.set(прясть.name.text, прясть);

export { прясть };