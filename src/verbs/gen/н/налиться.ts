import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налиться: PerfectVerb = {
  name: Word('налиться', 3),
  singular1stPerson: Word('нальюсь', 4),
  singular2ndPerson: Word('нальёшься', 1),
  singular3rdPerson: Word('нальётся', 1),
  plural1stPerson: Word('нальёмся', 1),
  plural2ndPerson: Word('нальётесь', 1),
  plural3rdPerson: Word('нальются', 4),
  masculinePast: Word('налился', 3),
  femininePast: Word('налилась', 5),
  neuterPast: Word('налилось//налило'сь', 3),
  pluralPast: Word('налились//налили'сь', 3),
  imperativeInformal: Word('налейся', 3),
  imperativeFormal: Word('налейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(налиться.name.text, налиться);

export { налиться };