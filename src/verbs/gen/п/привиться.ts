import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привиться: PerfectVerb = {
  name: Word('привиться', 4),
  singular1stPerson: Word('привьюсь', 5),
  singular2ndPerson: Word('привьёшься', 2),
  singular3rdPerson: Word('привьётся', 2),
  plural1stPerson: Word('привьёмся', 2),
  plural2ndPerson: Word('привьётесь', 7),
  plural3rdPerson: Word('привьются', 5),
  masculinePast: Word('привился', 4),
  femininePast: Word('привилась', 6),
  neuterPast: Word('привилось//привило'сь', 4),
  pluralPast: Word('привились//привили'сь', 4),
  imperativeInformal: Word('привейся', 4),
  imperativeFormal: Word('привейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(привиться.name.text, привиться);

export { привиться };