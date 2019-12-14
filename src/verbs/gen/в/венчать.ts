import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const венчать: PerfectVerb = {
  name: Word('венчать', 4),
  singular1stPerson: Word('венчаю', 4),
  singular2ndPerson: Word('венчаешь', 4),
  singular3rdPerson: Word('венчает', 4),
  plural1stPerson: Word('венчаем', 4),
  plural2ndPerson: Word('венчаете', 4),
  plural3rdPerson: Word('венчают', 4),
  masculinePast: Word('венчал', 4),
  femininePast: Word('венчала', 4),
  neuterPast: Word('венчало', 4),
  pluralPast: Word('венчали', 4),
  imperativeInformal: Word('венчай', 4),
  imperativeFormal: Word('венчайте', 4),
  imperfect: [],
};

perfectVerbs.set(венчать.name.text, венчать);

export { венчать };