import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размолоться: PerfectVerb = {
  name: Word('размолоться', 6),
  singular1stPerson: Word('размелюсь', 6),
  singular2ndPerson: Word('размелешься', 4),
  singular3rdPerson: Word('размелется', 4),
  plural1stPerson: Word('размелемся', 4),
  plural2ndPerson: Word('размелетесь', 4),
  plural3rdPerson: Word('размелются', 4),
  masculinePast: Word('размололся', 6),
  femininePast: Word('размололась', 6),
  neuterPast: Word('размололось', 6),
  pluralPast: Word('размололись', 6),
  imperativeInformal: Word('размелись', 6),
  imperativeFormal: Word('размелитесь', 6),
  imperfect: [],
};

perfectVerbs.set(размолоться.name.text, размолоться);

export { размолоться };