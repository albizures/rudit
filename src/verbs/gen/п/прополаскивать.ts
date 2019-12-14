import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прополаскивать: PerfectVerb = {
  name: Word('прополаскивать', 6),
  singular1stPerson: Word('прополаскиваю', 6),
  singular2ndPerson: Word('прополаскиваешь', 6),
  singular3rdPerson: Word('прополаскивает', 6),
  plural1stPerson: Word('прополаскиваем', 6),
  plural2ndPerson: Word('прополаскиваете', 6),
  plural3rdPerson: Word('прополаскивают', 6),
  masculinePast: Word('прополаскивал', 6),
  femininePast: Word('прополаскивала', 6),
  neuterPast: Word('прополаскивало', 6),
  pluralPast: Word('прополаскивали', 6),
  imperativeInformal: Word('прополаскивай', 6),
  imperativeFormal: Word('прополаскивайте', 6),
  imperfect: [],
};

perfectVerbs.set(прополаскивать.name.text, прополаскивать);

export { прополаскивать };