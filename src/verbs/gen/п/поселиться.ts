import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поселиться: PerfectVerb = {
  name: Word('поселиться', 5),
  singular1stPerson: Word('поселюсь', 5),
  singular2ndPerson: Word('поселишься', 5),
  singular3rdPerson: Word('поселится', 5),
  plural1stPerson: Word('поселимся', 5),
  plural2ndPerson: Word('поселитесь', 5),
  plural3rdPerson: Word('поселятся', 5),
  masculinePast: Word('поселился', 5),
  femininePast: Word('поселилась', 5),
  neuterPast: Word('поселилось', 5),
  pluralPast: Word('поселились', 5),
  imperativeInformal: Word('поселись', 5),
  imperativeFormal: Word('поселитесь', 5),
  imperfect: [],
};

perfectVerbs.set(поселиться.name.text, поселиться);

export { поселиться };