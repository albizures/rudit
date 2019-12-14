import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нападать: PerfectVerb = {
  name: Word('нападать', 3),
  singular1stPerson: Word('нападаю', 3),
  singular2ndPerson: Word('нападаешь', 3),
  singular3rdPerson: Word('нападает', 3),
  plural1stPerson: Word('нападаем', 3),
  plural2ndPerson: Word('нападаете', 3),
  plural3rdPerson: Word('нападают', 3),
  masculinePast: Word('нападал', 3),
  femininePast: Word('нападала', 3),
  neuterPast: Word('нападало', 3),
  pluralPast: Word('нападали', 3),
  imperativeInformal: Word('нападай', 3),
  imperativeFormal: Word('нападайте', 3),
  imperfect: [],
};

perfectVerbs.set(нападать.name.text, нападать);

export { нападать };