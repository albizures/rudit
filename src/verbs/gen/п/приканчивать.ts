import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приканчивать: PerfectVerb = {
  name: Word('приканчивать', 4),
  singular1stPerson: Word('приканчиваю', 4),
  singular2ndPerson: Word('приканчиваешь', 4),
  singular3rdPerson: Word('приканчивает', 4),
  plural1stPerson: Word('приканчиваем', 4),
  plural2ndPerson: Word('приканчиваете', 4),
  plural3rdPerson: Word('приканчивают', 4),
  masculinePast: Word('приканчивал', 4),
  femininePast: Word('приканчивала', 4),
  neuterPast: Word('приканчивало', 4),
  pluralPast: Word('приканчивали', 4),
  imperativeInformal: Word('приканчивай', 4),
  imperativeFormal: Word('приканчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(приканчивать.name.text, приканчивать);

export { приканчивать };