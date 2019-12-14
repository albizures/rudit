import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добиться: PerfectVerb = {
  name: Word('добиться', 3),
  singular1stPerson: Word('добьюсь', 4),
  singular2ndPerson: Word('добьёшься', 1),
  singular3rdPerson: Word('добьётся', 1),
  plural1stPerson: Word('добьёмся', 1),
  plural2ndPerson: Word('добьётесь', 6),
  plural3rdPerson: Word('добьются', 4),
  masculinePast: Word('добился', 3),
  femininePast: Word('добилась', 3),
  neuterPast: Word('добилось', 3),
  pluralPast: Word('добились', 3),
  imperativeInformal: Word('добейся', 3),
  imperativeFormal: Word('добейтесь', 3),
  imperfect: ['добиваться'],
};

perfectVerbs.set(добиться.name.text, добиться);

export { добиться };