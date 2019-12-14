import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осерчать: PerfectVerb = {
  name: Word('осерчать', 5),
  singular1stPerson: Word('осерчаю', 5),
  singular2ndPerson: Word('осерчаешь', 5),
  singular3rdPerson: Word('осерчает', 5),
  plural1stPerson: Word('осерчаем', 5),
  plural2ndPerson: Word('осерчаете', 5),
  plural3rdPerson: Word('осерчают', 5),
  masculinePast: Word('осерчал', 5),
  femininePast: Word('осерчала', 5),
  neuterPast: Word('осерчало', 5),
  pluralPast: Word('осерчали', 5),
  imperativeInformal: Word('осерчай', 5),
  imperativeFormal: Word('осерчайте', 5),
  imperfect: [],
};

perfectVerbs.set(осерчать.name.text, осерчать);

export { осерчать };