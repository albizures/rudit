import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расколоть: PerfectVerb = {
  name: Word('расколоть', 6),
  singular1stPerson: Word('расколю', 6),
  singular2ndPerson: Word('расколешь', 4),
  singular3rdPerson: Word('расколет', 4),
  plural1stPerson: Word('расколем', 4),
  plural2ndPerson: Word('расколете', 4),
  plural3rdPerson: Word('расколют', 4),
  masculinePast: Word('расколол', 6),
  femininePast: Word('расколола', 6),
  neuterPast: Word('раскололо', 6),
  pluralPast: Word('раскололи', 6),
  imperativeInformal: Word('расколи', 6),
  imperativeFormal: Word('расколите', 6),
  imperfect: [],
};

perfectVerbs.set(расколоть.name.text, расколоть);

export { расколоть };