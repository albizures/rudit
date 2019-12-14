import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заругать: PerfectVerb = {
  name: Word('заругать', 5),
  singular1stPerson: Word('заругаю', 5),
  singular2ndPerson: Word('заругаешь', 5),
  singular3rdPerson: Word('заругает', 5),
  plural1stPerson: Word('заругаем', 5),
  plural2ndPerson: Word('заругаете', 5),
  plural3rdPerson: Word('заругают', 5),
  masculinePast: Word('заругал', 5),
  femininePast: Word('заругала', 5),
  neuterPast: Word('заругало', 5),
  pluralPast: Word('заругали', 5),
  imperativeInformal: Word('заругай', 5),
  imperativeFormal: Word('заругайте', 5),
  imperfect: [],
};

perfectVerbs.set(заругать.name.text, заругать);

export { заругать };