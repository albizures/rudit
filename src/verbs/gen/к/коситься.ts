import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коситься: PerfectVerb = {
  name: Word('коситься', 3),
  singular1stPerson: Word('кошусь', 3),
  singular2ndPerson: Word('косишься', 3),
  singular3rdPerson: Word('косится', 3),
  plural1stPerson: Word('косимся', 3),
  plural2ndPerson: Word('коситесь', 3),
  plural3rdPerson: Word('косятся', 3),
  masculinePast: Word('косился', 3),
  femininePast: Word('косилась', 3),
  neuterPast: Word('косилось', 3),
  pluralPast: Word('косились', 3),
  imperativeInformal: Word('косись', 3),
  imperativeFormal: Word('коситесь', 3),
  imperfect: [],
};

perfectVerbs.set(коситься.name.text, коситься);

export { коситься };