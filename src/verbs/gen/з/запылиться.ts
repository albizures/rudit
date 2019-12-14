import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запылиться: PerfectVerb = {
  name: Word('запылиться', 5),
  singular1stPerson: Word('запылюсь', 5),
  singular2ndPerson: Word('запылишься', 5),
  singular3rdPerson: Word('запылится', 5),
  plural1stPerson: Word('запылимся', 5),
  plural2ndPerson: Word('запылитесь', 5),
  plural3rdPerson: Word('запылятся', 5),
  masculinePast: Word('запылился', 5),
  femininePast: Word('запылилась', 5),
  neuterPast: Word('запылилось', 5),
  pluralPast: Word('запылились', 5),
  imperativeInformal: Word('запылись', 5),
  imperativeFormal: Word('запылитесь', 5),
  imperfect: [],
};

perfectVerbs.set(запылиться.name.text, запылиться);

export { запылиться };