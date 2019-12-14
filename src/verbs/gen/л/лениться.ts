import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лениться: PerfectVerb = {
  name: Word('лениться', 3),
  singular1stPerson: Word('ленюсь', 3),
  singular2ndPerson: Word('ленишься', 1),
  singular3rdPerson: Word('ленится', 1),
  plural1stPerson: Word('ленимся', 1),
  plural2ndPerson: Word('ленитесь', 1),
  plural3rdPerson: Word('ленятся', 1),
  masculinePast: Word('ленился', 3),
  femininePast: Word('ленилась', 3),
  neuterPast: Word('ленилось', 3),
  pluralPast: Word('ленились', 3),
  imperativeInformal: Word('ленись', 3),
  imperativeFormal: Word('ленитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лениться.name.text, лениться);

export { лениться };