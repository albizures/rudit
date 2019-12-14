import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обколоть: PerfectVerb = {
  name: Word('обколоть', 5),
  singular1stPerson: Word('обколю', 5),
  singular2ndPerson: Word('обколешь', 3),
  singular3rdPerson: Word('обколет', 3),
  plural1stPerson: Word('обколем', 3),
  plural2ndPerson: Word('обколете', 3),
  plural3rdPerson: Word('обколют', 3),
  masculinePast: Word('обколол', 5),
  femininePast: Word('обколола', 5),
  neuterPast: Word('обкололо', 5),
  pluralPast: Word('обкололи', 5),
  imperativeInformal: Word('обколи', 5),
  imperativeFormal: Word('обколите', 5),
  imperfect: [],
};

perfectVerbs.set(обколоть.name.text, обколоть);

export { обколоть };