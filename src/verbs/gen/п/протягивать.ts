import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протягивать: PerfectVerb = {
  name: Word('протягивать', 4),
  singular1stPerson: Word('протягиваю', 4),
  singular2ndPerson: Word('протягиваешь', 4),
  singular3rdPerson: Word('протягивает', 4),
  plural1stPerson: Word('протягиваем', 4),
  plural2ndPerson: Word('протягиваете', 4),
  plural3rdPerson: Word('протягивают', 4),
  masculinePast: Word('протягивал', 4),
  femininePast: Word('протягивала', 4),
  neuterPast: Word('протягивало', 4),
  pluralPast: Word('протягивали', 4),
  imperativeInformal: Word('протягивай', 4),
  imperativeFormal: Word('протягивайте', 4),
  imperfect: ['протянуть'],
};

perfectVerbs.set(протягивать.name.text, протягивать);

export { протягивать };