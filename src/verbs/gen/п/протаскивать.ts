import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протаскивать: PerfectVerb = {
  name: Word('протаскивать', 4),
  singular1stPerson: Word('протаскиваю', 4),
  singular2ndPerson: Word('протаскиваешь', 4),
  singular3rdPerson: Word('протаскивает', 4),
  plural1stPerson: Word('протаскиваем', 4),
  plural2ndPerson: Word('протаскиваете', 4),
  plural3rdPerson: Word('протаскивают', 4),
  masculinePast: Word('протаскивал', 4),
  femininePast: Word('протаскивала', 4),
  neuterPast: Word('протаскивало', 4),
  pluralPast: Word('протаскивали', 4),
  imperativeInformal: Word('протаскивай', 4),
  imperativeFormal: Word('протаскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(протаскивать.name.text, протаскивать);

export { протаскивать };