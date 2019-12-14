import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const серчать: PerfectVerb = {
  name: Word('серчать', 4),
  singular1stPerson: Word('серчаю', 4),
  singular2ndPerson: Word('серчаешь', 4),
  singular3rdPerson: Word('серчает', 4),
  plural1stPerson: Word('серчаем', 4),
  plural2ndPerson: Word('серчаете', 4),
  plural3rdPerson: Word('серчают', 4),
  masculinePast: Word('серчал', 4),
  femininePast: Word('серчала', 4),
  neuterPast: Word('серчало', 4),
  pluralPast: Word('серчали', 4),
  imperativeInformal: Word('серчай', 4),
  imperativeFormal: Word('серчайте', 4),
  imperfect: [],
};

perfectVerbs.set(серчать.name.text, серчать);

export { серчать };