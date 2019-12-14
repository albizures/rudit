import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восстановиться: PerfectVerb = {
  name: Word('восстановиться', 9),
  singular1stPerson: Word('восстановлюсь', 10),
  singular2ndPerson: Word('восстановишься', 7),
  singular3rdPerson: Word('восстановится', 7),
  plural1stPerson: Word('восстановимся', 7),
  plural2ndPerson: Word('восстановитесь', 7),
  plural3rdPerson: Word('восстановятся', 7),
  masculinePast: Word('восстановился', 9),
  femininePast: Word('восстановилась', 9),
  neuterPast: Word('восстановилось', 9),
  pluralPast: Word('восстановились', 9),
  imperativeInformal: Word('восстановись', 9),
  imperativeFormal: Word('восстановитесь', 9),
  imperfect: [],
};

perfectVerbs.set(восстановиться.name.text, восстановиться);

export { восстановиться };