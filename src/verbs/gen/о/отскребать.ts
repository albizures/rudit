import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отскребать: PerfectVerb = {
  name: Word('отскребать', 7),
  singular1stPerson: Word('отскребаю', 7),
  singular2ndPerson: Word('отскребаешь', 7),
  singular3rdPerson: Word('отскребает', 7),
  plural1stPerson: Word('отскребаем', 7),
  plural2ndPerson: Word('отскребаете', 7),
  plural3rdPerson: Word('отскребают', 7),
  masculinePast: Word('отскребал', 7),
  femininePast: Word('отскребала', 7),
  neuterPast: Word('отскребало', 7),
  pluralPast: Word('отскребали', 7),
  imperativeInformal: Word('отскребай', 7),
  imperativeFormal: Word('отскребайте', 7),
  imperfect: [],
};

perfectVerbs.set(отскребать.name.text, отскребать);

export { отскребать };