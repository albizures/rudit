import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const виться: PerfectVerb = {
  name: Word('виться', 1),
  singular1stPerson: Word('вьюсь', 2),
  singular2ndPerson: Word('вьёшься', 2),
  singular3rdPerson: Word('вьётся', 2),
  plural1stPerson: Word('вьёмся', 2),
  plural2ndPerson: Word('вьётесь', 2),
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