import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впаивать: PerfectVerb = {
  name: Word('впаивать', 2),
  singular1stPerson: Word('впаиваю', 2),
  singular2ndPerson: Word('впаиваешь', 2),
  singular3rdPerson: Word('впаивает', 2),
  plural1stPerson: Word('впаиваем', 2),
  plural2ndPerson: Word('впаиваете', 2),
  plural3rdPerson: Word('впаивают', 2),
  masculinePast: Word('впаивал', 2),
  femininePast: Word('впаивала', 2),
  neuterPast: Word('впаивало', 2),
  pluralPast: Word('впаивали', 2),
  imperativeInformal: Word('впаивай', 2),
  imperativeFormal: Word('впаивайте', 2),
  imperfect: [],
};

perfectVerbs.set(впаивать.name.text, впаивать);

export { впаивать };