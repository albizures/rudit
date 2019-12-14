import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вселиться: PerfectVerb = {
  name: Word('вселиться', 4),
  singular1stPerson: Word('вселюсь', 4),
  singular2ndPerson: Word('вселишься', 4),
  singular3rdPerson: Word('вселится', 4),
  plural1stPerson: Word('вселимся', 4),
  plural2ndPerson: Word('вселитесь', 4),
  plural3rdPerson: Word('вселятся', 4),
  masculinePast: Word('вселился', 4),
  femininePast: Word('вселилась', 4),
  neuterPast: Word('вселилось', 4),
  pluralPast: Word('вселились', 4),
  imperativeInformal: Word('вселись', 4),
  imperativeFormal: Word('вселитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вселиться.name.text, вселиться);

export { вселиться };