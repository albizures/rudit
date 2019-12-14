import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покалывать: PerfectVerb = {
  name: Word('покалывать', 3),
  singular1stPerson: Word('покалываю', 3),
  singular2ndPerson: Word('покалываешь', 3),
  singular3rdPerson: Word('покалывает', 3),
  plural1stPerson: Word('покалываем', 3),
  plural2ndPerson: Word('покалываете', 3),
  plural3rdPerson: Word('покалывают', 3),
  masculinePast: Word('покалывал', 3),
  femininePast: Word('покалывала', 3),
  neuterPast: Word('покалывало', 3),
  pluralPast: Word('покалывали', 3),
  imperativeInformal: Word('покалывай', 3),
  imperativeFormal: Word('покалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(покалывать.name.text, покалывать);

export { покалывать };