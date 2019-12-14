import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протаивать: PerfectVerb = {
  name: Word('протаивать', 4),
  singular1stPerson: Word('протаиваю', 4),
  singular2ndPerson: Word('протаиваешь', 4),
  singular3rdPerson: Word('протаивает', 4),
  plural1stPerson: Word('протаиваем', 4),
  plural2ndPerson: Word('протаиваете', 4),
  plural3rdPerson: Word('протаивают', 4),
  masculinePast: Word('протаивал', 4),
  femininePast: Word('протаивала', 4),
  neuterPast: Word('протаивало', 4),
  pluralPast: Word('протаивали', 4),
  imperativeInformal: Word('протаивай', 4),
  imperativeFormal: Word('протаивайте', 4),
  imperfect: [],
};

perfectVerbs.set(протаивать.name.text, протаивать);

export { протаивать };