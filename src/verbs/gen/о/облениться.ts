import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облениться: PerfectVerb = {
  name: Word('облениться', 5),
  singular1stPerson: Word('обленюсь', 5),
  singular2ndPerson: Word('обленишься', 3),
  singular3rdPerson: Word('обленится', 3),
  plural1stPerson: Word('обленимся', 3),
  plural2ndPerson: Word('обленитесь', 3),
  plural3rdPerson: Word('обленятся', 3),
  masculinePast: Word('обленился', 5),
  femininePast: Word('обленилась', 5),
  neuterPast: Word('обленилось', 5),
  pluralPast: Word('обленились', 5),
  imperativeInformal: Word('обленись', 5),
  imperativeFormal: Word('обленитесь', 5),
  imperfect: [],
};

perfectVerbs.set(облениться.name.text, облениться);

export { облениться };