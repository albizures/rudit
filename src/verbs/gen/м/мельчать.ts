import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мельчать: PerfectVerb = {
  name: Word('мельчать', 5),
  singular1stPerson: Word('мельчаю', 5),
  singular2ndPerson: Word('мельчаешь', 5),
  singular3rdPerson: Word('мельчает', 5),
  plural1stPerson: Word('мельчаем', 5),
  plural2ndPerson: Word('мельчаете', 5),
  plural3rdPerson: Word('мельчают', 5),
  masculinePast: Word('мельчал', 5),
  femininePast: Word('мельчала', 5),
  neuterPast: Word('мельчало', 5),
  pluralPast: Word('мельчали', 5),
  imperativeInformal: Word('мельчай', 5),
  imperativeFormal: Word('мельчайте', 5),
  imperfect: [],
};

perfectVerbs.set(мельчать.name.text, мельчать);

export { мельчать };