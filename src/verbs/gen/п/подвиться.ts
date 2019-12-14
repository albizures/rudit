import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвиться: PerfectVerb = {
  name: Word('подвиться', 4),
  singular1stPerson: Word('подовьюсь', 6),
  singular2ndPerson: Word('подовьёшься', 1),
  singular3rdPerson: Word('подовьётся', 1),
  plural1stPerson: Word('подовьёмся', 1),
  plural2ndPerson: Word('подовьётесь', 8),
  plural3rdPerson: Word('подовьются', 6),
  masculinePast: Word('подвился', 4),
  femininePast: Word('подвилась', 6),
  neuterPast: Word('подвилось//подвило'сь', 4),
  pluralPast: Word('подвились//подвили'сь', 4),
  imperativeInformal: Word('подвейся', 4),
  imperativeFormal: Word('подвейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подвиться.name.text, подвиться);

export { подвиться };