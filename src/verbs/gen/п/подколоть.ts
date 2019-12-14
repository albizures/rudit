import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подколоть: PerfectVerb = {
  name: Word('подколоть', 6),
  singular1stPerson: Word('подколю', 6),
  singular2ndPerson: Word('подколешь', 4),
  singular3rdPerson: Word('подколет', 4),
  plural1stPerson: Word('подколем', 4),
  plural2ndPerson: Word('подколете', 4),
  plural3rdPerson: Word('подколют', 4),
  masculinePast: Word('подколол', 6),
  femininePast: Word('подколола', 6),
  neuterPast: Word('подкололо', 6),
  pluralPast: Word('подкололи', 6),
  imperativeInformal: Word('подколи', 6),
  imperativeFormal: Word('подколите', 6),
  imperfect: [],
};

perfectVerbs.set(подколоть.name.text, подколоть);

export { подколоть };