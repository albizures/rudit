import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выселиться: PerfectVerb = {
  name: Word('выселиться', 1),
  singular1stPerson: Word('выселюсь', 1),
  singular2ndPerson: Word('выселишься', 1),
  singular3rdPerson: Word('выселится', 1),
  plural1stPerson: Word('выселимся', 1),
  plural2ndPerson: Word('выселитесь', 1),
  plural3rdPerson: Word('выселятся', 1),
  masculinePast: Word('выселился', 1),
  femininePast: Word('выселилась', 1),
  neuterPast: Word('выселилось', 1),
  pluralPast: Word('выселились', 1),
  imperativeInformal: Word('выселись', 1),
  imperativeFormal: Word('выселитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выселиться.name.text, выселиться);

export { выселиться };