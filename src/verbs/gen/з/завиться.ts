import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завиться: PerfectVerb = {
  name: Word('завиться', 3),
  singular1stPerson: Word('завьюсь', 4),
  singular2ndPerson: Word('завьёшься', 4),
  singular3rdPerson: Word('завьётся', 4),
  plural1stPerson: Word('завьёмся', 4),
  plural2ndPerson: Word('завьётесь', 4),
  plural3rdPerson: Word('завьются', 4),
  masculinePast: Word('завился', 3),
  femininePast: Word('завилась', 5),
  neuterPast: Word('завилось//завило'сь', 3),
  pluralPast: Word('завились//завили'сь', 3),
  imperativeInformal: Word('завейся', 3),
  imperativeFormal: Word('завейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(завиться.name.text, завиться);

export { завиться };