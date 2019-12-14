import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вломиться: PerfectVerb = {
  name: Word('вломиться', 4),
  singular1stPerson: Word('вломлюсь', 5),
  singular2ndPerson: Word('вломишься', 2),
  singular3rdPerson: Word('вломится', 2),
  plural1stPerson: Word('вломимся', 2),
  plural2ndPerson: Word('вломитесь', 2),
  plural3rdPerson: Word('вломятся', 2),
  masculinePast: Word('вломился', 4),
  femininePast: Word('вломилась', 4),
  neuterPast: Word('вломилось', 4),
  pluralPast: Word('вломились', 4),
  imperativeInformal: Word('вломись', 4),
  imperativeFormal: Word('вломитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вломиться.name.text, вломиться);

export { вломиться };