import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полениться: PerfectVerb = {
  name: Word('полениться', 5),
  singular1stPerson: Word('поленюсь', 5),
  singular2ndPerson: Word('поленишься', 3),
  singular3rdPerson: Word('поленится', 3),
  plural1stPerson: Word('поленимся', 3),
  plural2ndPerson: Word('поленитесь', 3),
  plural3rdPerson: Word('поленятся', 3),
  masculinePast: Word('поленился', 5),
  femininePast: Word('поленилась', 5),
  neuterPast: Word('поленилось', 5),
  pluralPast: Word('поленились', 5),
  imperativeInformal: Word('поленись', 5),
  imperativeFormal: Word('поленитесь', 5),
  imperfect: [],
};

perfectVerbs.set(полениться.name.text, полениться);

export { полениться };