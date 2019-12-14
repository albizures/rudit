import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const явиться: PerfectVerb = {
  name: Word('явиться', 2),
  singular1stPerson: Word('явлюсь', 3),
  singular2ndPerson: Word('явишься', 0),
  singular3rdPerson: Word('явится', 0),
  plural1stPerson: Word('явимся', 0),
  plural2ndPerson: Word('явитесь', 0),
  plural3rdPerson: Word('явятся', 0),
  masculinePast: Word('явился', 2),
  femininePast: Word('явилась', 2),
  neuterPast: Word('явилось', 2),
  pluralPast: Word('явились', 2),
  imperativeInformal: Word('явись', 2),
  imperativeFormal: Word('явитесь', 2),
  imperfect: ['являться'],
};

perfectVerbs.set(явиться.name.text, явиться);

export { явиться };