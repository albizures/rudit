import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стаскивать: PerfectVerb = {
  name: Word('стаскивать', 2),
  singular1stPerson: Word('стаскиваю', 2),
  singular2ndPerson: Word('стаскиваешь', 2),
  singular3rdPerson: Word('стаскивает', 2),
  plural1stPerson: Word('стаскиваем', 2),
  plural2ndPerson: Word('стаскиваете', 2),
  plural3rdPerson: Word('стаскивают', 2),
  masculinePast: Word('стаскивал', 2),
  femininePast: Word('стаскивала', 2),
  neuterPast: Word('стаскивало', 2),
  pluralPast: Word('стаскивали', 2),
  imperativeInformal: Word('стаскивай', 2),
  imperativeFormal: Word('стаскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(стаскивать.name.text, стаскивать);

export { стаскивать };