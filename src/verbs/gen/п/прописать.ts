import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прописать: PerfectVerb = {
  name: Word('прописать', 6),
  singular1stPerson: Word('пропишу', 6),
  singular2ndPerson: Word('пропишешь', 4),
  singular3rdPerson: Word('пропишет', 4),
  plural1stPerson: Word('пропишем', 4),
  plural2ndPerson: Word('пропишете', 4),
  plural3rdPerson: Word('пропишут', 4),
  masculinePast: Word('прописал', 6),
  femininePast: Word('прописала', 6),
  neuterPast: Word('прописало', 6),
  pluralPast: Word('прописали', 6),
  imperativeInformal: Word('пропиши', 6),
  imperativeFormal: Word('пропишите', 6),
  imperfect: [],
};

perfectVerbs.set(прописать.name.text, прописать);

export { прописать };