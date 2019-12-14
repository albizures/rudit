import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размахаться: PerfectVerb = {
  name: Word('размахаться', 6),
  singular1stPerson: Word('размашусь', 6),
  singular2ndPerson: Word('размашешься', 4),
  singular3rdPerson: Word('размашется', 4),
  plural1stPerson: Word('размашемся', 4),
  plural2ndPerson: Word('размашетесь', 4),
  plural3rdPerson: Word('размашутся', 4),
  masculinePast: Word('размахался', 6),
  femininePast: Word('размахалась', 6),
  neuterPast: Word('размахалось', 6),
  pluralPast: Word('размахались', 6),
  imperativeInformal: Word('размашись', 6),
  imperativeFormal: Word('размашитесь', 6),
  imperfect: [],
};

perfectVerbs.set(размахаться.name.text, размахаться);

export { размахаться };