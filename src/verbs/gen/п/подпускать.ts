import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпускать: PerfectVerb = {
  name: Word('подпускать', 7),
  singular1stPerson: Word('подпускаю', 7),
  singular2ndPerson: Word('подпускаешь', 7),
  singular3rdPerson: Word('подпускает', 7),
  plural1stPerson: Word('подпускаем', 7),
  plural2ndPerson: Word('подпускаете', 7),
  plural3rdPerson: Word('подпускают', 7),
  masculinePast: Word('подпускал', 7),
  femininePast: Word('подпускала', 7),
  neuterPast: Word('подпускало', 7),
  pluralPast: Word('подпускали', 7),
  imperativeInformal: Word('подпускай', 7),
  imperativeFormal: Word('подпускайте', 7),
  imperfect: [],
};

perfectVerbs.set(подпускать.name.text, подпускать);

export { подпускать };