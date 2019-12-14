import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассупонивать: PerfectVerb = {
  name: Word('рассупонивать', 6),
  singular1stPerson: Word('рассупониваю', 6),
  singular2ndPerson: Word('рассупониваешь', 6),
  singular3rdPerson: Word('рассупонивает', 6),
  plural1stPerson: Word('рассупониваем', 6),
  plural2ndPerson: Word('рассупониваете', 6),
  plural3rdPerson: Word('рассупонивают', 6),
  masculinePast: Word('рассупонивал', 6),
  femininePast: Word('рассупонивала', 6),
  neuterPast: Word('рассупонивало', 6),
  pluralPast: Word('рассупонивали', 6),
  imperativeInformal: Word('рассупонивай', 6),
  imperativeFormal: Word('рассупонивайте', 6),
  imperfect: [],
};

perfectVerbs.set(рассупонивать.name.text, рассупонивать);

export { рассупонивать };