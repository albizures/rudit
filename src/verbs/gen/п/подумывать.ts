import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подумывать: PerfectVerb = {
  name: Word('подумывать', 3),
  singular1stPerson: Word('подумываю', 3),
  singular2ndPerson: Word('подумываешь', 3),
  singular3rdPerson: Word('подумывает', 3),
  plural1stPerson: Word('подумываем', 3),
  plural2ndPerson: Word('подумываете', 3),
  plural3rdPerson: Word('подумывают', 3),
  masculinePast: Word('подумывал', 3),
  femininePast: Word('подумывала', 3),
  neuterPast: Word('подумывало', 3),
  pluralPast: Word('подумывали', 3),
  imperativeInformal: Word('подумывай', 3),
  imperativeFormal: Word('подумывайте', 3),
  imperfect: [],
};

perfectVerbs.set(подумывать.name.text, подумывать);

export { подумывать };