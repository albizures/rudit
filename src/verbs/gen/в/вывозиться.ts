import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывозиться: PerfectVerb = {
  name: Word('вывозиться', 1),
  singular1stPerson: Word('вывожусь', 1),
  singular2ndPerson: Word('вывозишься', 1),
  singular3rdPerson: Word('вывозится', 1),
  plural1stPerson: Word('вывозимся', 1),
  plural2ndPerson: Word('вывозитесь', 1),
  plural3rdPerson: Word('вывозятся', 1),
  masculinePast: Word('вывозился', 1),
  femininePast: Word('вывозилась', 1),
  neuterPast: Word('вывозилось', 1),
  pluralPast: Word('вывозились', 1),
  imperativeInformal: Word('вывозись', 1),
  imperativeFormal: Word('вывозитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вывозиться.name.text, вывозиться);

export { вывозиться };