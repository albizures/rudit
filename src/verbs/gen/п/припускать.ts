import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припускать: PerfectVerb = {
  name: Word('припускать', 7),
  singular1stPerson: Word('припускаю', 7),
  singular2ndPerson: Word('припускаешь', 7),
  singular3rdPerson: Word('припускает', 7),
  plural1stPerson: Word('припускаем', 7),
  plural2ndPerson: Word('припускаете', 7),
  plural3rdPerson: Word('припускают', 7),
  masculinePast: Word('припускал', 7),
  femininePast: Word('припускала', 7),
  neuterPast: Word('припускало', 7),
  pluralPast: Word('припускали', 7),
  imperativeInformal: Word('припускай', 7),
  imperativeFormal: Word('припускайте', 7),
  imperfect: [],
};

perfectVerbs.set(припускать.name.text, припускать);

export { припускать };