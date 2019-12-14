import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маркировать: PerfectVerb = {
  name: Word('маркировать', 8),
  singular1stPerson: Word('маркирую', 6),
  singular2ndPerson: Word('маркируешь', 6),
  singular3rdPerson: Word('маркирует', 6),
  plural1stPerson: Word('маркируем', 6),
  plural2ndPerson: Word('маркируете', 6),
  plural3rdPerson: Word('маркируют', 6),
  masculinePast: Word('маркировал', 8),
  femininePast: Word('маркировала', 8),
  neuterPast: Word('маркировало', 8),
  pluralPast: Word('маркировали', 8),
  imperativeInformal: Word('маркируй', 6),
  imperativeFormal: Word('маркируйте', 6),
  imperfect: [],
};

perfectVerbs.set(маркировать.name.text, маркировать);

export { маркировать };