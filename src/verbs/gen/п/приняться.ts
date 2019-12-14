import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приняться: PerfectVerb = {
  name: Word('приняться', 4),
  singular1stPerson: Word('примусь', 4),
  singular2ndPerson: Word('примёшься', 2),
  singular3rdPerson: Word('примётся', 2),
  plural1stPerson: Word('примёмся', 2),
  plural2ndPerson: Word('примётесь', 6),
  plural3rdPerson: Word('примутся', 4),
  masculinePast: Word('принялся,принялся',приня'лся', 2),
  femininePast: Word('принялась', 6),
  neuterPast: Word('принялось,при'нялось', 6),
  pluralPast: Word('принялись,при'нялись', 6),
  imperativeInformal: Word('примись', 4),
  imperativeFormal: Word('примитесь', 4),
  imperfect: ['приниматься'],
};

perfectVerbs.set(приняться.name.text, приняться);

export { приняться };