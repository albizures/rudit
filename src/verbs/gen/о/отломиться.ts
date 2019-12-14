import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отломиться: PerfectVerb = {
  name: Word('отломиться', 5),
  singular1stPerson: Word('отломлюсь', 6),
  singular2ndPerson: Word('отломишься', 3),
  singular3rdPerson: Word('отломится', 3),
  plural1stPerson: Word('отломимся', 3),
  plural2ndPerson: Word('отломитесь', 3),
  plural3rdPerson: Word('отломятся', 3),
  masculinePast: Word('отломился', 5),
  femininePast: Word('отломилась', 5),
  neuterPast: Word('отломилось', 5),
  pluralPast: Word('отломились', 5),
  imperativeInformal: Word('отломись', 5),
  imperativeFormal: Word('отломитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отломиться.name.text, отломиться);

export { отломиться };