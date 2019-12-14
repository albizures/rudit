import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вколоть: PerfectVerb = {
  name: Word('вколоть', 4),
  singular1stPerson: Word('вколю', 4),
  singular2ndPerson: Word('вколешь', 2),
  singular3rdPerson: Word('вколет', 2),
  plural1stPerson: Word('вколем', 2),
  plural2ndPerson: Word('вколете', 2),
  plural3rdPerson: Word('вколют', 2),
  masculinePast: Word('вколол', 4),
  femininePast: Word('вколола', 4),
  neuterPast: Word('вкололо', 4),
  pluralPast: Word('вкололи', 4),
  imperativeInformal: Word('вколи', 4),
  imperativeFormal: Word('вколите', 4),
  imperfect: [],
};

perfectVerbs.set(вколоть.name.text, вколоть);

export { вколоть };