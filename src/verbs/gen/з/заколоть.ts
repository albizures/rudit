import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколоть: PerfectVerb = {
  name: Word('заколоть', 5),
  singular1stPerson: Word('заколю', 5),
  singular2ndPerson: Word('заколешь', 3),
  singular3rdPerson: Word('заколет', 3),
  plural1stPerson: Word('заколем', 3),
  plural2ndPerson: Word('заколете', 3),
  plural3rdPerson: Word('заколют', 3),
  masculinePast: Word('заколол', 5),
  femininePast: Word('заколола', 5),
  neuterPast: Word('закололо', 5),
  pluralPast: Word('закололи', 5),
  imperativeInformal: Word('заколи', 5),
  imperativeFormal: Word('заколите', 5),
  imperfect: [],
};

perfectVerbs.set(заколоть.name.text, заколоть);

export { заколоть };