import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вставиться: PerfectVerb = {
  name: Word('вставиться', 3),
  singular1stPerson: Word('вставлюсь', 3),
  singular2ndPerson: Word('вставишься', 3),
  singular3rdPerson: Word('вставится', 3),
  plural1stPerson: Word('вставимся', 3),
  plural2ndPerson: Word('вставитесь', 3),
  plural3rdPerson: Word('вставятся', 3),
  masculinePast: Word('вставился', 3),
  femininePast: Word('вставилась', 3),
  neuterPast: Word('вставилось', 3),
  pluralPast: Word('вставились', 3),
  imperativeInformal: Word('вставься', 3),
  imperativeFormal: Word('вставьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вставиться.name.text, вставиться);

export { вставиться };