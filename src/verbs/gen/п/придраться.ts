import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придраться: PerfectVerb = {
  name: Word('придраться', 5),
  singular1stPerson: Word('придерусь', 6),
  singular2ndPerson: Word('придерёшься', 4),
  singular3rdPerson: Word('придерётся', 4),
  plural1stPerson: Word('придерёмся', 4),
  plural2ndPerson: Word('придерётесь', 4),
  plural3rdPerson: Word('придерутся', 6),
  masculinePast: Word('придрался', 5),
  femininePast: Word('придралась', 5),
  neuterPast: Word('придралось', 5),
  pluralPast: Word('придрались', 5),
  imperativeInformal: Word('придерись', 6),
  imperativeFormal: Word('придеритесь', 6),
  imperfect: ['придираться'],
};

perfectVerbs.set(придраться.name.text, придраться);

export { придраться };