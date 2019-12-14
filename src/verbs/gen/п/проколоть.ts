import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проколоть: PerfectVerb = {
  name: Word('проколоть', 6),
  singular1stPerson: Word('проколю', 6),
  singular2ndPerson: Word('проколешь', 4),
  singular3rdPerson: Word('проколет', 4),
  plural1stPerson: Word('проколем', 4),
  plural2ndPerson: Word('проколете', 4),
  plural3rdPerson: Word('проколют', 4),
  masculinePast: Word('проколол', 6),
  femininePast: Word('проколола', 6),
  neuterPast: Word('прокололо', 6),
  pluralPast: Word('прокололи', 6),
  imperativeInformal: Word('проколи', 6),
  imperativeFormal: Word('проколите', 6),
  imperfect: [],
};

perfectVerbs.set(проколоть.name.text, проколоть);

export { проколоть };