import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затаивать: PerfectVerb = {
  name: Word('затаивать', 3),
  singular1stPerson: Word('затаиваю', 3),
  singular2ndPerson: Word('затаиваешь', 3),
  singular3rdPerson: Word('затаивает', 3),
  plural1stPerson: Word('затаиваем', 3),
  plural2ndPerson: Word('затаиваете', 3),
  plural3rdPerson: Word('затаивают', 3),
  masculinePast: Word('затаивал', 3),
  femininePast: Word('затаивала', 3),
  neuterPast: Word('затаивало', 3),
  pluralPast: Word('затаивали', 3),
  imperativeInformal: Word('затаивай', 3),
  imperativeFormal: Word('затаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(затаивать.name.text, затаивать);

export { затаивать };