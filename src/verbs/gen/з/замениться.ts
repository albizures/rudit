import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замениться: PerfectVerb = {
  name: Word('замениться', 5),
  singular1stPerson: Word('заменюсь', 5),
  singular2ndPerson: Word('заменишься', 3),
  singular3rdPerson: Word('заменится', 3),
  plural1stPerson: Word('заменимся', 3),
  plural2ndPerson: Word('заменитесь', 3),
  plural3rdPerson: Word('заменятся', 3),
  masculinePast: Word('заменился', 5),
  femininePast: Word('заменилась', 5),
  neuterPast: Word('заменилось', 5),
  pluralPast: Word('заменились', 5),
  imperativeInformal: Word('заменись', 5),
  imperativeFormal: Word('заменитесь', 5),
  imperfect: [],
};

perfectVerbs.set(замениться.name.text, замениться);

export { замениться };