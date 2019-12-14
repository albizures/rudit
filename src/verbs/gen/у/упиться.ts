import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упиться: PerfectVerb = {
  name: Word('упиться', 2),
  singular1stPerson: Word('упьюсь', 3),
  singular2ndPerson: Word('упьёшься', 7),
  singular3rdPerson: Word('упьётся', 6),
  plural1stPerson: Word('упьёмся', 6),
  plural2ndPerson: Word('упьётесь', 5),
  plural3rdPerson: Word('упьются', 3),
  masculinePast: Word('упился', 2),
  femininePast: Word('упилась', 4),
  neuterPast: Word('упилось//упило'сь', 2),
  pluralPast: Word('упились//упили'сь', 2),
  imperativeInformal: Word('упейся', 2),
  imperativeFormal: Word('упейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(упиться.name.text, упиться);

export { упиться };