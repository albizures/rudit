import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надломиться: PerfectVerb = {
  name: Word('надломиться', 6),
  singular1stPerson: Word('надломлюсь', 7),
  singular2ndPerson: Word('надломишься', 4),
  singular3rdPerson: Word('надломится', 4),
  plural1stPerson: Word('надломимся', 4),
  plural2ndPerson: Word('надломитесь', 4),
  plural3rdPerson: Word('надломятся', 4),
  masculinePast: Word('надломился', 6),
  femininePast: Word('надломилась', 6),
  neuterPast: Word('надломилось', 6),
  pluralPast: Word('надломились', 6),
  imperativeInformal: Word('надломись', 6),
  imperativeFormal: Word('надломитесь', 6),
  imperfect: [],
};

perfectVerbs.set(надломиться.name.text, надломиться);

export { надломиться };