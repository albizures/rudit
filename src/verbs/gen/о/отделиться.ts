import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделиться: PerfectVerb = {
  name: Word('отделиться', 5),
  singular1stPerson: Word('отделюсь', 5),
  singular2ndPerson: Word('отделишься', 3),
  singular3rdPerson: Word('отделится', 3),
  plural1stPerson: Word('отделимся', 3),
  plural2ndPerson: Word('отделитесь', 3),
  plural3rdPerson: Word('отделятся', 3),
  masculinePast: Word('отделился', 5),
  femininePast: Word('отделилась', 5),
  neuterPast: Word('отделилось', 5),
  pluralPast: Word('отделились', 5),
  imperativeInformal: Word('отделись', 5),
  imperativeFormal: Word('отделитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отделиться.name.text, отделиться);

export { отделиться };