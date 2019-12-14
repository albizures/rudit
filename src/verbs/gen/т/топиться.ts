import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топиться: PerfectVerb = {
  name: Word('топиться', 3),
  singular1stPerson: Word('топлюсь', 4),
  singular2ndPerson: Word('топишься', 1),
  singular3rdPerson: Word('топится', 1),
  plural1stPerson: Word('топимся', 1),
  plural2ndPerson: Word('топитесь', 1),
  plural3rdPerson: Word('топятся', 1),
  masculinePast: Word('топился', 3),
  femininePast: Word('топилась', 3),
  neuterPast: Word('топилось', 3),
  pluralPast: Word('топились', 3),
  imperativeInformal: Word('топись', 3),
  imperativeFormal: Word('топитесь', 3),
  imperfect: [],
};

perfectVerbs.set(топиться.name.text, топиться);

export { топиться };