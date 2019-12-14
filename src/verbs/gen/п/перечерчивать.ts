import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечерчивать: PerfectVerb = {
  name: Word('перечерчивать', 5),
  singular1stPerson: Word('перечерчиваю', 5),
  singular2ndPerson: Word('перечерчиваешь', 5),
  singular3rdPerson: Word('перечерчивает', 5),
  plural1stPerson: Word('перечерчиваем', 5),
  plural2ndPerson: Word('перечерчиваете', 5),
  plural3rdPerson: Word('перечерчивают', 5),
  masculinePast: Word('перечерчивал', 5),
  femininePast: Word('перечерчивала', 5),
  neuterPast: Word('перечерчивало', 5),
  pluralPast: Word('перечерчивали', 5),
  imperativeInformal: Word('перечерчивай', 5),
  imperativeFormal: Word('перечерчивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перечерчивать.name.text, перечерчивать);

export { перечерчивать };