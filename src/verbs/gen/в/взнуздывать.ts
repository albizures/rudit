import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взнуздывать: PerfectVerb = {
  name: Word('взнуздывать', 3),
  singular1stPerson: Word('взнуздываю', 3),
  singular2ndPerson: Word('взнуздываешь', 3),
  singular3rdPerson: Word('взнуздывает', 3),
  plural1stPerson: Word('взнуздываем', 3),
  plural2ndPerson: Word('взнуздываете', 3),
  plural3rdPerson: Word('взнуздывают', 3),
  masculinePast: Word('взнуздывал', 3),
  femininePast: Word('взнуздывала', 3),
  neuterPast: Word('взнуздывало', 3),
  pluralPast: Word('взнуздывали', 3),
  imperativeInformal: Word('взнуздывай', 3),
  imperativeFormal: Word('взнуздывайте', 3),
  imperfect: [],
};

perfectVerbs.set(взнуздывать.name.text, взнуздывать);

export { взнуздывать };