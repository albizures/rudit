import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развивать: PerfectVerb = {
  name: Word('развивать', 6),
  singular1stPerson: Word('развиваю', 6),
  singular2ndPerson: Word('развиваешь', 6),
  singular3rdPerson: Word('развивает', 6),
  plural1stPerson: Word('развиваем', 6),
  plural2ndPerson: Word('развиваете', 6),
  plural3rdPerson: Word('развивают', 6),
  masculinePast: Word('развивал', 6),
  femininePast: Word('развивала', 6),
  neuterPast: Word('развивало', 6),
  pluralPast: Word('развивали', 6),
  imperativeInformal: Word('развивай', 6),
  imperativeFormal: Word('развивайте', 6),
  imperfect: ['развить'],
};

perfectVerbs.set(развивать.name.text, развивать);

export { развивать };