import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выколоть: PerfectVerb = {
  name: Word('выколоть', 1),
  singular1stPerson: Word('выколю', 1),
  singular2ndPerson: Word('выколешь', 1),
  singular3rdPerson: Word('выколет', 1),
  plural1stPerson: Word('выколем', 1),
  plural2ndPerson: Word('выколете', 1),
  plural3rdPerson: Word('выколют', 1),
  masculinePast: Word('выколол', 1),
  femininePast: Word('выколола', 1),
  neuterPast: Word('выкололо', 1),
  pluralPast: Word('выкололи', 1),
  imperativeInformal: Word('выколи', 1),
  imperativeFormal: Word('выколите', 1),
  imperfect: [],
};

perfectVerbs.set(выколоть.name.text, выколоть);

export { выколоть };