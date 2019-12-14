import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очерчивать: PerfectVerb = {
  name: Word('очерчивать', 2),
  singular1stPerson: Word('очерчиваю', 2),
  singular2ndPerson: Word('очерчиваешь', 2),
  singular3rdPerson: Word('очерчивает', 2),
  plural1stPerson: Word('очерчиваем', 2),
  plural2ndPerson: Word('очерчиваете', 2),
  plural3rdPerson: Word('очерчивают', 2),
  masculinePast: Word('очерчивал', 2),
  femininePast: Word('очерчивала', 2),
  neuterPast: Word('очерчивало', 2),
  pluralPast: Word('очерчивали', 2),
  imperativeInformal: Word('очерчивай', 2),
  imperativeFormal: Word('очерчивайте', 2),
  imperfect: [],
};

perfectVerbs.set(очерчивать.name.text, очерчивать);

export { очерчивать };