import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толпиться: PerfectVerb = {
  name: Word('толпиться', 4),
  singular1stPerson: Word('толплюсь', 5),
  singular2ndPerson: Word('толпишься', 4),
  singular3rdPerson: Word('толпится', 4),
  plural1stPerson: Word('толпимся', 4),
  plural2ndPerson: Word('толпитесь', 4),
  plural3rdPerson: Word('толпятся', 4),
  masculinePast: Word('толпился', 4),
  femininePast: Word('толпилась', 4),
  neuterPast: Word('толпилось', 4),
  pluralPast: Word('толпились', 4),
  imperativeInformal: Word('толпись', 4),
  imperativeFormal: Word('толпитесь', 4),
  imperfect: [],
};

perfectVerbs.set(толпиться.name.text, толпиться);

export { толпиться };