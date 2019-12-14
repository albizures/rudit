import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замешать: PerfectVerb = {
  name: Word('замешать', 5),
  singular1stPerson: Word('замешаю', 5),
  singular2ndPerson: Word('замешаешь', 5),
  singular3rdPerson: Word('замешает', 5),
  plural1stPerson: Word('замешаем', 5),
  plural2ndPerson: Word('замешаете', 5),
  plural3rdPerson: Word('замешают', 5),
  masculinePast: Word('замешал', 5),
  femininePast: Word('замешала', 5),
  neuterPast: Word('замешало', 5),
  pluralPast: Word('замешали', 5),
  imperativeInformal: Word('замешай', 5),
  imperativeFormal: Word('замешайте', 5),
  imperfect: [],
};

perfectVerbs.set(замешать.name.text, замешать);

export { замешать };