import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвиться: PerfectVerb = {
  name: Word('обвиться', 3),
  singular1stPerson: Word('обовьюсь', 5),
  singular2ndPerson: Word('обовьёшься', 0),
  singular3rdPerson: Word('обовьётся', 0),
  plural1stPerson: Word('обовьёмся', 0),
  plural2ndPerson: Word('обовьётесь', 7),
  plural3rdPerson: Word('обовьются', 5),
  masculinePast: Word('обвился', 3),
  femininePast: Word('обвилась', 5),
  neuterPast: Word('обвилось//обвило'сь', 3),
  pluralPast: Word('обвились//обвили'сь', 3),
  imperativeInformal: Word('обвейся', 3),
  imperativeFormal: Word('обвейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обвиться.name.text, обвиться);

export { обвиться };