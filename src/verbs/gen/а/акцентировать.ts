import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const акцентировать: PerfectVerb = {
  name: Word('акцентировать', 6),
  singular1stPerson: Word('акцентирую', 6),
  singular2ndPerson: Word('акцентируешь', 6),
  singular3rdPerson: Word('акцентирует', 6),
  plural1stPerson: Word('акцентируем', 6),
  plural2ndPerson: Word('акцентируете', 6),
  plural3rdPerson: Word('акцентируют', 6),
  masculinePast: Word('акцентировал', 6),
  femininePast: Word('акцентировала', 6),
  neuterPast: Word('акцентировало', 6),
  pluralPast: Word('акцентировали', 6),
  imperativeInformal: Word('акцентируй', 6),
  imperativeFormal: Word('акцентируйте', 6),
  imperfect: [],
};

perfectVerbs.set(акцентировать.name.text, акцентировать);

export { акцентировать };