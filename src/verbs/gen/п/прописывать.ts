import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прописывать: PerfectVerb = {
  name: Word('прописывать', 4),
  singular1stPerson: Word('прописываю', 4),
  singular2ndPerson: Word('прописываешь', 4),
  singular3rdPerson: Word('прописывает', 4),
  plural1stPerson: Word('прописываем', 4),
  plural2ndPerson: Word('прописываете', 4),
  plural3rdPerson: Word('прописывают', 4),
  masculinePast: Word('прописывал', 4),
  femininePast: Word('прописывала', 4),
  neuterPast: Word('прописывало', 4),
  pluralPast: Word('прописывали', 4),
  imperativeInformal: Word('прописывай', 4),
  imperativeFormal: Word('прописывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прописывать.name.text, прописывать);

export { прописывать };