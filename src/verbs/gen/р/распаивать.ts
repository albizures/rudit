import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распаивать: PerfectVerb = {
  name: Word('распаивать', 4),
  singular1stPerson: Word('распаиваю', 4),
  singular2ndPerson: Word('распаиваешь', 4),
  singular3rdPerson: Word('распаивает', 4),
  plural1stPerson: Word('распаиваем', 4),
  plural2ndPerson: Word('распаиваете', 4),
  plural3rdPerson: Word('распаивают', 4),
  masculinePast: Word('распаивал', 4),
  femininePast: Word('распаивала', 4),
  neuterPast: Word('распаивало', 4),
  pluralPast: Word('распаивали', 4),
  imperativeInformal: Word('распаивай', 4),
  imperativeFormal: Word('распаивайте', 4),
  imperfect: [],
};

perfectVerbs.set(распаивать.name.text, распаивать);

export { распаивать };