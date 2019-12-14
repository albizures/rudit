import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчерчивать: PerfectVerb = {
  name: Word('исчерчивать', 3),
  singular1stPerson: Word('исчерчиваю', 3),
  singular2ndPerson: Word('исчерчиваешь', 3),
  singular3rdPerson: Word('исчерчивает', 3),
  plural1stPerson: Word('исчерчиваем', 3),
  plural2ndPerson: Word('исчерчиваете', 3),
  plural3rdPerson: Word('исчерчивают', 3),
  masculinePast: Word('исчерчивал', 3),
  femininePast: Word('исчерчивала', 3),
  neuterPast: Word('исчерчивало', 3),
  pluralPast: Word('исчерчивали', 3),
  imperativeInformal: Word('исчерчивай', 3),
  imperativeFormal: Word('исчерчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(исчерчивать.name.text, исчерчивать);

export { исчерчивать };