import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развиться: PerfectVerb = {
  name: Word('развиться', 4),
  singular1stPerson: Word('разовьюсь', 6),
  singular2ndPerson: Word('разовьёшься', 1),
  singular3rdPerson: Word('разовьётся', 1),
  plural1stPerson: Word('разовьёмся', 1),
  plural2ndPerson: Word('разовьётесь', 1),
  plural3rdPerson: Word('разовьются', 6),
  masculinePast: Word('развился', 4),
  femininePast: Word('развилась', 4),
  neuterPast: Word('развилось', 4),
  pluralPast: Word('развились', 4),
  imperativeInformal: Word('развейся', 4),
  imperativeFormal: Word('развейтесь', 4),
  imperfect: ['развиваться'],
};

perfectVerbs.set(развиться.name.text, развиться);

export { развиться };