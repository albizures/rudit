import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покуситься: PerfectVerb = {
  name: Word('покуситься', 5),
  singular1stPerson: Word('покушусь', 5),
  singular2ndPerson: Word('покусишься', 5),
  singular3rdPerson: Word('покусится', 5),
  plural1stPerson: Word('покусимся', 5),
  plural2ndPerson: Word('покуситесь', 5),
  plural3rdPerson: Word('покусятся', 5),
  masculinePast: Word('покусился', 5),
  femininePast: Word('покусилась', 5),
  neuterPast: Word('покусилось', 5),
  pluralPast: Word('покусились', 5),
  imperativeInformal: Word('покусись', 5),
  imperativeFormal: Word('покуситесь', 5),
  imperfect: [],
};

perfectVerbs.set(покуситься.name.text, покуситься);

export { покуситься };