import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const столпиться: PerfectVerb = {
  name: Word('столпиться', 5),
  singular1stPerson: Word('столплюсь', 6),
  singular2ndPerson: Word('столпишься', 5),
  singular3rdPerson: Word('столпится', 5),
  plural1stPerson: Word('столпимся', 5),
  plural2ndPerson: Word('столпитесь', 5),
  plural3rdPerson: Word('столпятся', 5),
  masculinePast: Word('столпился', 5),
  femininePast: Word('столпилась', 5),
  neuterPast: Word('столпилось', 5),
  pluralPast: Word('столпились', 5),
  imperativeInformal: Word('столпись', 5),
  imperativeFormal: Word('столпитесь', 5),
  imperfect: [],
};

perfectVerbs.set(столпиться.name.text, столпиться);

export { столпиться };