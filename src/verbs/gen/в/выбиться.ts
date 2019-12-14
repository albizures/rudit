import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбиться: PerfectVerb = {
  name: Word('выбиться', 1),
  singular1stPerson: Word('выбьюсь', 4),
  singular2ndPerson: Word('выбьёшься', 8),
  singular3rdPerson: Word('выбьётся', 7),
  plural1stPerson: Word('выбьёмся', 7),
  plural2ndPerson: Word('выбьётесь', 6),
  plural3rdPerson: Word('выбьются', 4),
  masculinePast: Word('выбился', 1),
  femininePast: Word('выбилась', 1),
  neuterPast: Word('выбилось', 1),
  pluralPast: Word('выбились', 1),
  imperativeInformal: Word('выбейся', 3),
  imperativeFormal: Word('выбейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выбиться.name.text, выбиться);

export { выбиться };