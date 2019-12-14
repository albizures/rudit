import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свиться: PerfectVerb = {
  name: Word('свиться', 2),
  singular1stPerson: Word('совьюсь', 4),
  singular2ndPerson: Word('совьёшься', 4),
  singular3rdPerson: Word('совьётся', 4),
  plural1stPerson: Word('совьёмся', 4),
  plural2ndPerson: Word('совьётесь', 4),
  plural3rdPerson: Word('совьются', 4),
  masculinePast: Word('свился', 2),
  femininePast: Word('свилась', 4),
  neuterPast: Word('свилось//свило'сь', 2),
  pluralPast: Word('свились//свили'сь', 2),
  imperativeInformal: Word('свейся', 2),
  imperativeFormal: Word('свейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свиться.name.text, свиться);

export { свиться };