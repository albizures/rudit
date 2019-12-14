import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отругать: PerfectVerb = {
  name: Word('отругать', 5),
  singular1stPerson: Word('отругаю', 5),
  singular2ndPerson: Word('отругаешь', 5),
  singular3rdPerson: Word('отругает', 5),
  plural1stPerson: Word('отругаем', 5),
  plural2ndPerson: Word('отругаете', 5),
  plural3rdPerson: Word('отругают', 5),
  masculinePast: Word('отругал', 5),
  femininePast: Word('отругала', 5),
  neuterPast: Word('отругало', 5),
  pluralPast: Word('отругали', 5),
  imperativeInformal: Word('отругай', 5),
  imperativeFormal: Word('отругайте', 5),
  imperfect: [],
};

perfectVerbs.set(отругать.name.text, отругать);

export { отругать };