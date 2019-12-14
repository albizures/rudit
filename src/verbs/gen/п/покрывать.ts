import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрывать: PerfectVerb = {
  name: Word('покрывать', 6),
  singular1stPerson: Word('покрываю', 6),
  singular2ndPerson: Word('покрываешь', 6),
  singular3rdPerson: Word('покрывает', 6),
  plural1stPerson: Word('покрываем', 6),
  plural2ndPerson: Word('покрываете', 6),
  plural3rdPerson: Word('покрывают', 6),
  masculinePast: Word('покрывал', 6),
  femininePast: Word('покрывала', 6),
  neuterPast: Word('покрывало', 6),
  pluralPast: Word('покрывали', 6),
  imperativeInformal: Word('покрывай', 6),
  imperativeFormal: Word('покрывайте', 6),
  imperfect: [],
};

perfectVerbs.set(покрывать.name.text, покрывать);

export { покрывать };