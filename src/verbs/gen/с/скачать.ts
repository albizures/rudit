import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скачать: PerfectVerb = {
  name: Word('скачать', 4),
  singular1stPerson: Word('скачаю', 4),
  singular2ndPerson: Word('скачаешь', 4),
  singular3rdPerson: Word('скачает', 4),
  plural1stPerson: Word('скачаем', 4),
  plural2ndPerson: Word('скачаете', 4),
  plural3rdPerson: Word('скачают', 4),
  masculinePast: Word('скачал', 4),
  femininePast: Word('скачала', 4),
  neuterPast: Word('скачало', 4),
  pluralPast: Word('скачали', 4),
  imperativeInformal: Word('скачай', 4),
  imperativeFormal: Word('скачайте', 4),
  imperfect: [],
};

perfectVerbs.set(скачать.name.text, скачать);

export { скачать };