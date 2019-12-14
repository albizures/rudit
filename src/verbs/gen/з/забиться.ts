import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забиться: PerfectVerb = {
  name: Word('забиться', 3),
  singular1stPerson: Word('забьюсь', 4),
  singular2ndPerson: Word('забьёшься', 1),
  singular3rdPerson: Word('забьётся', 1),
  plural1stPerson: Word('забьёмся', 1),
  plural2ndPerson: Word('забьётесь', 1),
  plural3rdPerson: Word('забьются', 4),
  masculinePast: Word('забился', 3),
  femininePast: Word('забилась', 3),
  neuterPast: Word('забилось', 3),
  pluralPast: Word('забились', 3),
  imperativeInformal: Word('забейся', 3),
  imperativeFormal: Word('забейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(забиться.name.text, забиться);

export { забиться };