import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покружиться: PerfectVerb = {
  name: Word('покружиться', 6),
  singular1stPerson: Word('покружусь', 6),
  singular2ndPerson: Word('покружишься', 4),
  singular3rdPerson: Word('покружится', 4),
  plural1stPerson: Word('покружимся', 4),
  plural2ndPerson: Word('покружитесь', 4),
  plural3rdPerson: Word('покружатся', 4),
  masculinePast: Word('покружился', 6),
  femininePast: Word('покружилась', 6),
  neuterPast: Word('покружилось', 6),
  pluralPast: Word('покружились', 6),
  imperativeInformal: Word('покружись', 6),
  imperativeFormal: Word('покружитесь', 6),
  imperfect: [],
};

perfectVerbs.set(покружиться.name.text, покружиться);

export { покружиться };