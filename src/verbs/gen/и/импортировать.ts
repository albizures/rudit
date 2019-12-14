import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const импортировать: PerfectVerb = {
  name: Word('импортировать', 6),
  singular1stPerson: Word('импортирую', 6),
  singular2ndPerson: Word('импортируешь', 6),
  singular3rdPerson: Word('импортирует', 6),
  plural1stPerson: Word('импортируем', 6),
  plural2ndPerson: Word('импортируете', 6),
  plural3rdPerson: Word('импортируют', 6),
  masculinePast: Word('импортировал', 6),
  femininePast: Word('импортировала', 6),
  neuterPast: Word('импортировало', 6),
  pluralPast: Word('импортировали', 6),
  imperativeInformal: Word('импортируй', 6),
  imperativeFormal: Word('импортируйте', 6),
  imperfect: [],
};

perfectVerbs.set(импортировать.name.text, импортировать);

export { импортировать };