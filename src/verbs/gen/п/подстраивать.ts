import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстраивать: PerfectVerb = {
  name: Word('подстраивать', 6),
  singular1stPerson: Word('подстраиваю', 6),
  singular2ndPerson: Word('подстраиваешь', 6),
  singular3rdPerson: Word('подстраивает', 6),
  plural1stPerson: Word('подстраиваем', 6),
  plural2ndPerson: Word('подстраиваете', 6),
  plural3rdPerson: Word('подстраивают', 6),
  masculinePast: Word('подстраивал', 6),
  femininePast: Word('подстраивала', 6),
  neuterPast: Word('подстраивало', 6),
  pluralPast: Word('подстраивали', 6),
  imperativeInformal: Word('подстраивай', 6),
  imperativeFormal: Word('подстраивайте', 6),
  imperfect: ['подстроить'],
};

perfectVerbs.set(подстраивать.name.text, подстраивать);

export { подстраивать };