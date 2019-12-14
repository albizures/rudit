import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчеканивать: PerfectVerb = {
  name: Word('отчеканивать', 5),
  singular1stPerson: Word('отчеканиваю', 5),
  singular2ndPerson: Word('отчеканиваешь', 5),
  singular3rdPerson: Word('отчеканивает', 5),
  plural1stPerson: Word('отчеканиваем', 5),
  plural2ndPerson: Word('отчеканиваете', 5),
  plural3rdPerson: Word('отчеканивают', 5),
  masculinePast: Word('отчеканивал', 5),
  femininePast: Word('отчеканивала', 5),
  neuterPast: Word('отчеканивало', 5),
  pluralPast: Word('отчеканивали', 5),
  imperativeInformal: Word('отчеканивай', 5),
  imperativeFormal: Word('отчеканивайте', 5),
  imperfect: [],
};

perfectVerbs.set(отчеканивать.name.text, отчеканивать);

export { отчеканивать };