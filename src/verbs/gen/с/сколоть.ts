import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сколоть: PerfectVerb = {
  name: Word('сколоть', 4),
  singular1stPerson: Word('сколю', 4),
  singular2ndPerson: Word('сколешь', 2),
  singular3rdPerson: Word('сколет', 2),
  plural1stPerson: Word('сколем', 2),
  plural2ndPerson: Word('сколете', 2),
  plural3rdPerson: Word('сколют', 2),
  masculinePast: Word('сколол', 4),
  femininePast: Word('сколола', 4),
  neuterPast: Word('скололо', 4),
  pluralPast: Word('скололи', 4),
  imperativeInformal: Word('сколи', 4),
  imperativeFormal: Word('сколите', 4),
  imperfect: [],
};

perfectVerbs.set(сколоть.name.text, сколоть);

export { сколоть };