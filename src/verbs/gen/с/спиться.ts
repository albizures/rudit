import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спиться: PerfectVerb = {
  name: Word('спиться', 2),
  singular1stPerson: Word('сопьюсь', 4),
  singular2ndPerson: Word('сопьёшься', 1),
  singular3rdPerson: Word('сопьётся', 1),
  plural1stPerson: Word('сопьёмся', 1),
  plural2ndPerson: Word('сопьётесь', 6),
  plural3rdPerson: Word('сопьются', 4),
  masculinePast: Word('спился', 2),
  femininePast: Word('спилась', 4),
  neuterPast: Word('спилось//спило'сь', 2),
  pluralPast: Word('спились//спили'сь', 2),
  imperativeInformal: Word('спейся', 2),
  imperativeFormal: Word('спейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(спиться.name.text, спиться);

export { спиться };