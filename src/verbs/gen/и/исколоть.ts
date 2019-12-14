import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исколоть: PerfectVerb = {
  name: Word('исколоть', 5),
  singular1stPerson: Word('исколю', 5),
  singular2ndPerson: Word('исколешь', 3),
  singular3rdPerson: Word('исколет', 3),
  plural1stPerson: Word('исколем', 3),
  plural2ndPerson: Word('исколете', 3),
  plural3rdPerson: Word('исколют', 3),
  masculinePast: Word('исколол', 5),
  femininePast: Word('исколола', 5),
  neuterPast: Word('искололо', 5),
  pluralPast: Word('искололи', 5),
  imperativeInformal: Word('исколи', 5),
  imperativeFormal: Word('исколите', 5),
  imperfect: [],
};

perfectVerbs.set(исколоть.name.text, исколоть);

export { исколоть };