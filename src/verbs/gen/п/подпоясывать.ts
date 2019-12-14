import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпоясывать: PerfectVerb = {
  name: Word('подпоясывать', 5),
  singular1stPerson: Word('подпоясываю', 5),
  singular2ndPerson: Word('подпоясываешь', 5),
  singular3rdPerson: Word('подпоясывает', 5),
  plural1stPerson: Word('подпоясываем', 5),
  plural2ndPerson: Word('подпоясываете', 5),
  plural3rdPerson: Word('подпоясывают', 5),
  masculinePast: Word('подпоясывал', 5),
  femininePast: Word('подпоясывала', 5),
  neuterPast: Word('подпоясывало', 5),
  pluralPast: Word('подпоясывали', 5),
  imperativeInformal: Word('подпоясывай', 5),
  imperativeFormal: Word('подпоясывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подпоясывать.name.text, подпоясывать);

export { подпоясывать };