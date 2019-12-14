import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размолоть: PerfectVerb = {
  name: Word('размолоть', 6),
  singular1stPerson: Word('размелю', 6),
  singular2ndPerson: Word('размелешь', 4),
  singular3rdPerson: Word('размелет', 4),
  plural1stPerson: Word('размелем', 4),
  plural2ndPerson: Word('размелете', 4),
  plural3rdPerson: Word('размелют', 4),
  masculinePast: Word('размолол', 6),
  femininePast: Word('размолола', 6),
  neuterPast: Word('размололо', 6),
  pluralPast: Word('размололи', 6),
  imperativeInformal: Word('размели', 6),
  imperativeFormal: Word('размелите', 6),
  imperfect: [],
};

perfectVerbs.set(размолоть.name.text, размолоть);

export { размолоть };