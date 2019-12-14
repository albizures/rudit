import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стаивать: PerfectVerb = {
  name: Word('стаивать', 2),
  singular1stPerson: Word('стаиваю', 2),
  singular2ndPerson: Word('стаиваешь', 2),
  singular3rdPerson: Word('стаивает', 2),
  plural1stPerson: Word('стаиваем', 2),
  plural2ndPerson: Word('стаиваете', 2),
  plural3rdPerson: Word('стаивают', 2),
  masculinePast: Word('стаивал', 2),
  femininePast: Word('стаивала', 2),
  neuterPast: Word('стаивало', 2),
  pluralPast: Word('стаивали', 2),
  imperativeInformal: Word('стаивай', 2),
  imperativeFormal: Word('стаивайте', 2),
  imperfect: [],
};

perfectVerbs.set(стаивать.name.text, стаивать);

export { стаивать };