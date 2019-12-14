import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распростереть: PerfectVerb = {
  name: Word('распростереть', 10),
  singular1stPerson: Word('распростру', 9),
  singular2ndPerson: Word('распрострёшь', 1),
  singular3rdPerson: Word('распрострёт', 1),
  plural1stPerson: Word('распрострём', 1),
  plural2ndPerson: Word('распрострёте', 1),
  plural3rdPerson: Word('распрострут', 9),
  masculinePast: Word('распростёр', 1),
  femininePast: Word('распростёрла', 1),
  neuterPast: Word('распростёрло', 1),
  pluralPast: Word('распростёрли', 1),
  imperativeInformal: Word('распростри', 9),
  imperativeFormal: Word('распрострите', 9),
  imperfect: [],
};

perfectVerbs.set(распростереть.name.text, распростереть);

export { распростереть };