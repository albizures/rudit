import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покоиться: PerfectVerb = {
  name: Word('покоиться', 3),
  singular1stPerson: Word('покоюсь', 3),
  singular2ndPerson: Word('покоишься', 3),
  singular3rdPerson: Word('покоится', 3),
  plural1stPerson: Word('покоимся', 3),
  plural2ndPerson: Word('покоитесь', 3),
  plural3rdPerson: Word('покоятся', 3),
  masculinePast: Word('покоился', 3),
  femininePast: Word('покоилась', 3),
  neuterPast: Word('покоилось', 3),
  pluralPast: Word('покоились', 3),
  imperativeInformal: Word('покойся', 3),
  imperativeFormal: Word('покойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(покоиться.name.text, покоиться);

export { покоиться };