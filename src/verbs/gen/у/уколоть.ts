import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уколоть: PerfectVerb = {
  name: Word('уколоть', 4),
  singular1stPerson: Word('уколю', 4),
  singular2ndPerson: Word('уколешь', 2),
  singular3rdPerson: Word('уколет', 2),
  plural1stPerson: Word('уколем', 2),
  plural2ndPerson: Word('уколете', 2),
  plural3rdPerson: Word('уколют', 2),
  masculinePast: Word('уколол', 4),
  femininePast: Word('уколола', 4),
  neuterPast: Word('укололо', 4),
  pluralPast: Word('укололи', 4),
  imperativeInformal: Word('уколи', 4),
  imperativeFormal: Word('уколите', 4),
  imperfect: [],
};

perfectVerbs.set(уколоть.name.text, уколоть);

export { уколоть };