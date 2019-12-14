import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стапливать: PerfectVerb = {
  name: Word('стапливать', 2),
  singular1stPerson: Word('стапливаю', 2),
  singular2ndPerson: Word('стапливаешь', 2),
  singular3rdPerson: Word('стапливает', 2),
  plural1stPerson: Word('стапливаем', 2),
  plural2ndPerson: Word('стапливаете', 2),
  plural3rdPerson: Word('стапливают', 2),
  masculinePast: Word('стапливал', 2),
  femininePast: Word('стапливала', 2),
  neuterPast: Word('стапливало', 2),
  pluralPast: Word('стапливали', 2),
  imperativeInformal: Word('стапливай', 2),
  imperativeFormal: Word('стапливайте', 2),
  imperfect: [],
};

perfectVerbs.set(стапливать.name.text, стапливать);

export { стапливать };