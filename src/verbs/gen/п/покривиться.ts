import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покривиться: PerfectVerb = {
  name: Word('покривиться', 6),
  singular1stPerson: Word('покривлюсь', 7),
  singular2ndPerson: Word('покривишься', 6),
  singular3rdPerson: Word('покривится', 6),
  plural1stPerson: Word('покривимся', 6),
  plural2ndPerson: Word('покривитесь', 6),
  plural3rdPerson: Word('покривятся', 6),
  masculinePast: Word('покривился', 6),
  femininePast: Word('покривилась', 6),
  neuterPast: Word('покривилось', 6),
  pluralPast: Word('покривились', 6),
  imperativeInformal: Word('покривись', 6),
  imperativeFormal: Word('покривитесь', 6),
  imperfect: [],
};

perfectVerbs.set(покривиться.name.text, покривиться);

export { покривиться };