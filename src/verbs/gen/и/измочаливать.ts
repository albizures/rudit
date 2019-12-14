import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измочаливать: PerfectVerb = {
  name: Word('измочаливать', 5),
  singular1stPerson: Word('измочаливаю', 5),
  singular2ndPerson: Word('измочаливаешь', 5),
  singular3rdPerson: Word('измочаливает', 5),
  plural1stPerson: Word('измочаливаем', 5),
  plural2ndPerson: Word('измочаливаете', 5),
  plural3rdPerson: Word('измочаливают', 5),
  masculinePast: Word('измочаливал', 5),
  femininePast: Word('измочаливала', 5),
  neuterPast: Word('измочаливало', 5),
  pluralPast: Word('измочаливали', 5),
  imperativeInformal: Word('измочаливай', 5),
  imperativeFormal: Word('измочаливайте', 5),
  imperfect: [],
};

perfectVerbs.set(измочаливать.name.text, измочаливать);

export { измочаливать };