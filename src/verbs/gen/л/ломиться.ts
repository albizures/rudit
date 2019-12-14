import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ломиться: PerfectVerb = {
  name: Word('ломиться', 3),
  singular1stPerson: Word('ломлюсь', 4),
  singular2ndPerson: Word('ломишься', 1),
  singular3rdPerson: Word('ломится', 1),
  plural1stPerson: Word('ломимся', 1),
  plural2ndPerson: Word('ломитесь', 1),
  plural3rdPerson: Word('ломятся', 1),
  masculinePast: Word('ломился', 3),
  femininePast: Word('ломилась', 3),
  neuterPast: Word('ломилось', 3),
  pluralPast: Word('ломились', 3),
  imperativeInformal: Word('ломись', 3),
  imperativeFormal: Word('ломитесь', 3),
  imperfect: [],
};

perfectVerbs.set(ломиться.name.text, ломиться);

export { ломиться };