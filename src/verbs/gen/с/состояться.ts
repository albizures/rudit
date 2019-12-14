import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состояться: PerfectVerb = {
  name: Word('состояться', 5),
  singular1stPerson: Word('состоюсь', 5),
  singular2ndPerson: Word('состоишься', 5),
  singular3rdPerson: Word('состоится', 5),
  plural1stPerson: Word('состоимся', 5),
  plural2ndPerson: Word('состоитесь', 5),
  plural3rdPerson: Word('состоятся', 5),
  masculinePast: Word('состоялся', 5),
  femininePast: Word('состоялась', 5),
  neuterPast: Word('состоялось', 5),
  pluralPast: Word('состоялись', 5),
  imperativeInformal: Word('состойся', 4),
  imperativeFormal: Word('состойтесь', 4),
  imperfect: [],
};

perfectVerbs.set(состояться.name.text, состояться);

export { состояться };