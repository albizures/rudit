import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ополаскивать: PerfectVerb = {
  name: Word('ополаскивать', 4),
  singular1stPerson: Word('ополаскиваю', 4),
  singular2ndPerson: Word('ополаскиваешь', 4),
  singular3rdPerson: Word('ополаскивает', 4),
  plural1stPerson: Word('ополаскиваем', 4),
  plural2ndPerson: Word('ополаскиваете', 4),
  plural3rdPerson: Word('ополаскивают', 4),
  masculinePast: Word('ополаскивал', 4),
  femininePast: Word('ополаскивала', 4),
  neuterPast: Word('ополаскивало', 4),
  pluralPast: Word('ополаскивали', 4),
  imperativeInformal: Word('ополаскивай', 4),
  imperativeFormal: Word('ополаскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(ополаскивать.name.text, ополаскивать);

export { ополаскивать };