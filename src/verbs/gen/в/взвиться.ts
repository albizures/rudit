import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвиться: PerfectVerb = {
  name: Word('взвиться', 3),
  singular1stPerson: Word('взовьюсь', 5),
  singular2ndPerson: Word('взовьёшься', 5),
  singular3rdPerson: Word('взовьётся', 5),
  plural1stPerson: Word('взовьёмся', 5),
  plural2ndPerson: Word('взовьётесь', 5),
  plural3rdPerson: Word('взовьются', 5),
  masculinePast: Word('взвился', 3),
  femininePast: Word('взвилась', 5),
  neuterPast: Word('взвилось//взвило'сь', 3),
  pluralPast: Word('взвились//взвили'сь', 3),
  imperativeInformal: Word('взвейся', 3),
  imperativeFormal: Word('взвейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(взвиться.name.text, взвиться);

export { взвиться };