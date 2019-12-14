import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорыть: PerfectVerb = {
  name: Word('прорыть', 4),
  singular1stPerson: Word('пророю', 4),
  singular2ndPerson: Word('пророешь', 4),
  singular3rdPerson: Word('пророет', 4),
  plural1stPerson: Word('пророем', 4),
  plural2ndPerson: Word('пророете', 4),
  plural3rdPerson: Word('пророют', 4),
  masculinePast: Word('прорыл', 4),
  femininePast: Word('прорыла', 4),
  neuterPast: Word('прорыло', 4),
  pluralPast: Word('прорыли', 4),
  imperativeInformal: Word('пророй', 4),
  imperativeFormal: Word('проройте', 4),
  imperfect: ['прорывать'],
};

perfectVerbs.set(прорыть.name.text, прорыть);

export { прорыть };