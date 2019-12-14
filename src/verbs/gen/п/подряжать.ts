import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подряжать: PerfectVerb = {
  name: Word('подряжать', 6),
  singular1stPerson: Word('подряжаю', 6),
  singular2ndPerson: Word('подряжаешь', 6),
  singular3rdPerson: Word('подряжает', 6),
  plural1stPerson: Word('подряжаем', 6),
  plural2ndPerson: Word('подряжаете', 6),
  plural3rdPerson: Word('подряжают', 6),
  masculinePast: Word('подряжал', 6),
  femininePast: Word('подряжала', 6),
  neuterPast: Word('подряжало', 6),
  pluralPast: Word('подряжали', 6),
  imperativeInformal: Word('подряжай', 6),
  imperativeFormal: Word('подряжайте', 6),
  imperfect: [],
};

perfectVerbs.set(подряжать.name.text, подряжать);

export { подряжать };