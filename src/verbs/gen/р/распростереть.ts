import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распростереть: PerfectVerb = {
  name: Word('распростереть', 10),
  singular1stPerson: Word('распростру', 9),
  singular2ndPerson: Word('распрострёшь', 9),
  singular3rdPerson: Word('распрострёт', 9),
  plural1stPerson: Word('распрострём', 9),
  plural2ndPerson: Word('распрострёте', 9),
  plural3rdPerson: Word('распрострут', 9),
  masculinePast: Word('распростёр', 8),
  femininePast: Word('распростёрла', 8),
  neuterPast: Word('распростёрло', 8),
  pluralPast: Word('распростёрли', 8),
  imperativeInformal: Word('распростри', 9),
  imperativeFormal: Word('распрострите', 9),
  imperfect: [],
};

perfectVerbs.set(распростереть.name.text, распростереть);

export { распростереть };