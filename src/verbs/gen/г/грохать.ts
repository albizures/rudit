import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грохать: PerfectVerb = {
  name: Word('грохать', 2),
  singular1stPerson: Word('грохаю', 2),
  singular2ndPerson: Word('грохаешь', 2),
  singular3rdPerson: Word('грохает', 2),
  plural1stPerson: Word('грохаем', 2),
  plural2ndPerson: Word('грохаете', 2),
  plural3rdPerson: Word('грохают', 2),
  masculinePast: Word('грохал', 2),
  femininePast: Word('грохала', 2),
  neuterPast: Word('грохало', 2),
  pluralPast: Word('грохали', 2),
  imperativeInformal: Word('грохай', 2),
  imperativeFormal: Word('грохайте', 2),
  imperfect: [],
};

perfectVerbs.set(грохать.name.text, грохать);

export { грохать };