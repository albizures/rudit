import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const виться: PerfectVerb = {
  name: Word('виться', 1),
  singular1stPerson: Word('вьюсь', 2),
  singular2ndPerson: Word('вьёшься', 6),
  singular3rdPerson: Word('вьётся', 5),
  plural1stPerson: Word('вьёмся', 5),
  plural2ndPerson: Word('вьётесь', 4),
  plural3rdPerson: Word('вьются', 2),
  masculinePast: Word('вился', 1),
  femininePast: Word('вилась', 3),
  neuterPast: Word('вилось//вило'сь', 1),
  pluralPast: Word('вились//вили'сь', 1),
  imperativeInformal: Word('вейся', 1),
  imperativeFormal: Word('вейтесь', 1),
  imperfect: [],
};

perfectVerbs.set(виться.name.text, виться);

export { виться };