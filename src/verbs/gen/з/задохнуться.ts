import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задохнуться: PerfectVerb = {
  name: Word('задохнуться', 6),
  singular1stPerson: Word('задохнусь', 6),
  singular2ndPerson: Word('задохнёшься', 1),
  singular3rdPerson: Word('задохнётся', 1),
  plural1stPerson: Word('задохнёмся', 1),
  plural2ndPerson: Word('задохнётесь', 1),
  plural3rdPerson: Word('задохнутся', 6),
  masculinePast: Word('задохнулся', 6),
  femininePast: Word('задохнулась', 6),
  neuterPast: Word('задохнулось', 6),
  pluralPast: Word('задохнулись', 6),
  imperativeInformal: Word('задохнись', 6),
  imperativeFormal: Word('задохнитесь', 6),
  imperfect: ['задыхаться'],
};

perfectVerbs.set(задохнуться.name.text, задохнуться);

export { задохнуться };