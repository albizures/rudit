import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копировать: PerfectVerb = {
  name: Word('копировать', 3),
  singular1stPerson: Word('копирую', 3),
  singular2ndPerson: Word('копируешь', 3),
  singular3rdPerson: Word('копирует', 3),
  plural1stPerson: Word('копируем', 3),
  plural2ndPerson: Word('копируете', 3),
  plural3rdPerson: Word('копируют', 3),
  masculinePast: Word('копировал', 3),
  femininePast: Word('копировала', 3),
  neuterPast: Word('копировало', 3),
  pluralPast: Word('копировали', 3),
  imperativeInformal: Word('копируй', 3),
  imperativeFormal: Word('копируйте', 3),
  imperfect: [],
};

perfectVerbs.set(копировать.name.text, копировать);

export { копировать };