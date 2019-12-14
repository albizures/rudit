import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простаивать: PerfectVerb = {
  name: Word('простаивать', 5),
  singular1stPerson: Word('простаиваю', 5),
  singular2ndPerson: Word('простаиваешь', 5),
  singular3rdPerson: Word('простаивает', 5),
  plural1stPerson: Word('простаиваем', 5),
  plural2ndPerson: Word('простаиваете', 5),
  plural3rdPerson: Word('простаивают', 5),
  masculinePast: Word('простаивал', 5),
  femininePast: Word('простаивала', 5),
  neuterPast: Word('простаивало', 5),
  pluralPast: Word('простаивали', 5),
  imperativeInformal: Word('простаивай', 5),
  imperativeFormal: Word('простаивайте', 5),
  imperfect: [],
};

perfectVerbs.set(простаивать.name.text, простаивать);

export { простаивать };