import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измельчать: PerfectVerb = {
  name: Word('измельчать', 7),
  singular1stPerson: Word('измельчаю', 7),
  singular2ndPerson: Word('измельчаешь', 7),
  singular3rdPerson: Word('измельчает', 7),
  plural1stPerson: Word('измельчаем', 7),
  plural2ndPerson: Word('измельчаете', 7),
  plural3rdPerson: Word('измельчают', 7),
  masculinePast: Word('измельчал', 7),
  femininePast: Word('измельчала', 7),
  neuterPast: Word('измельчало', 7),
  pluralPast: Word('измельчали', 7),
  imperativeInformal: Word('измельчай', 7),
  imperativeFormal: Word('измельчайте', 7),
  imperfect: [],
};

perfectVerbs.set(измельчать.name.text, измельчать);

export { измельчать };