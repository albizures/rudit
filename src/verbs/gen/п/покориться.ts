import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покориться: PerfectVerb = {
  name: Word('покориться', 5),
  singular1stPerson: Word('покорюсь', 5),
  singular2ndPerson: Word('покоришься', 5),
  singular3rdPerson: Word('покорится', 5),
  plural1stPerson: Word('покоримся', 5),
  plural2ndPerson: Word('покоритесь', 5),
  plural3rdPerson: Word('покорятся', 5),
  masculinePast: Word('покорился', 5),
  femininePast: Word('покорилась', 5),
  neuterPast: Word('покорилось', 5),
  pluralPast: Word('покорились', 5),
  imperativeInformal: Word('покорись', 5),
  imperativeFormal: Word('покоритесь', 5),
  imperfect: [],
};

perfectVerbs.set(покориться.name.text, покориться);

export { покориться };