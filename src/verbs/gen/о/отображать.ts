import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отображать: PerfectVerb = {
  name: Word('отображать', 7),
  singular1stPerson: Word('отображаю', 7),
  singular2ndPerson: Word('отображаешь', 7),
  singular3rdPerson: Word('отображает', 7),
  plural1stPerson: Word('отображаем', 7),
  plural2ndPerson: Word('отображаете', 7),
  plural3rdPerson: Word('отображают', 7),
  masculinePast: Word('отображал', 7),
  femininePast: Word('отображала', 7),
  neuterPast: Word('отображало', 7),
  pluralPast: Word('отображали', 7),
  imperativeInformal: Word('отображай', 7),
  imperativeFormal: Word('отображайте', 7),
  imperfect: [],
};

perfectVerbs.set(отображать.name.text, отображать);

export { отображать };