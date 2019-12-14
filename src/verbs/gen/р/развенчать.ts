import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развенчать: PerfectVerb = {
  name: Word('развенчать', 7),
  singular1stPerson: Word('развенчаю', 7),
  singular2ndPerson: Word('развенчаешь', 7),
  singular3rdPerson: Word('развенчает', 7),
  plural1stPerson: Word('развенчаем', 7),
  plural2ndPerson: Word('развенчаете', 7),
  plural3rdPerson: Word('развенчают', 7),
  masculinePast: Word('развенчал', 7),
  femininePast: Word('развенчала', 7),
  neuterPast: Word('развенчало', 7),
  pluralPast: Word('развенчали', 7),
  imperativeInformal: Word('развенчай', 7),
  imperativeFormal: Word('развенчайте', 7),
  imperfect: [],
};

perfectVerbs.set(развенчать.name.text, развенчать);

export { развенчать };