import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излиться: PerfectVerb = {
  name: Word('излиться', 3),
  singular1stPerson: Word('изольюсь', 5),
  singular2ndPerson: Word('изольёшься', 5),
  singular3rdPerson: Word('изольётся', 5),
  plural1stPerson: Word('изольёмся', 5),
  plural2ndPerson: Word('изольётесь', 5),
  plural3rdPerson: Word('изольются', 5),
  masculinePast: Word('излился', 3),
  femininePast: Word('излилась', 5),
  neuterPast: Word('излилось//излило'сь', 3),
  pluralPast: Word('излились//излили'сь', 3),
  imperativeInformal: Word('излейся', 3),
  imperativeFormal: Word('излейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(излиться.name.text, излиться);

export { излиться };