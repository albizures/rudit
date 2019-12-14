import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покоситься: PerfectVerb = {
  name: Word('покоситься', 5),
  singular1stPerson: Word('покошусь', 5),
  singular2ndPerson: Word('покосишься', 5),
  singular3rdPerson: Word('покосится', 5),
  plural1stPerson: Word('покосимся', 5),
  plural2ndPerson: Word('покоситесь', 5),
  plural3rdPerson: Word('покосятся', 5),
  masculinePast: Word('покосился', 5),
  femininePast: Word('покосилась', 5),
  neuterPast: Word('покосилось', 5),
  pluralPast: Word('покосились', 5),
  imperativeInformal: Word('покосись', 5),
  imperativeFormal: Word('покоситесь', 5),
  imperfect: [],
};

perfectVerbs.set(покоситься.name.text, покоситься);

export { покоситься };