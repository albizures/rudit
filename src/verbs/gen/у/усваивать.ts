import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усваивать: PerfectVerb = {
  name: Word('усваивать', 3),
  singular1stPerson: Word('усваиваю', 3),
  singular2ndPerson: Word('усваиваешь', 3),
  singular3rdPerson: Word('усваивает', 3),
  plural1stPerson: Word('усваиваем', 3),
  plural2ndPerson: Word('усваиваете', 3),
  plural3rdPerson: Word('усваивают', 3),
  masculinePast: Word('усваивал', 3),
  femininePast: Word('усваивала', 3),
  neuterPast: Word('усваивало', 3),
  pluralPast: Word('усваивали', 3),
  imperativeInformal: Word('усваивай', 3),
  imperativeFormal: Word('усваивайте', 3),
  imperfect: ['усвоить'],
};

perfectVerbs.set(усваивать.name.text, усваивать);

export { усваивать };