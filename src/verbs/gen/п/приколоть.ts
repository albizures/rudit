import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приколоть: PerfectVerb = {
  name: Word('приколоть', 6),
  singular1stPerson: Word('приколю', 6),
  singular2ndPerson: Word('приколешь', 4),
  singular3rdPerson: Word('приколет', 4),
  plural1stPerson: Word('приколем', 4),
  plural2ndPerson: Word('приколете', 4),
  plural3rdPerson: Word('приколют', 4),
  masculinePast: Word('приколол', 6),
  femininePast: Word('приколола', 6),
  neuterPast: Word('прикололо', 6),
  pluralPast: Word('прикололи', 6),
  imperativeInformal: Word('приколи', 6),
  imperativeFormal: Word('приколите', 6),
  imperfect: [],
};

perfectVerbs.set(приколоть.name.text, приколоть);

export { приколоть };