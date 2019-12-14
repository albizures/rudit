import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стругать: PerfectVerb = {
  name: Word('стругать', 5),
  singular1stPerson: Word('стругаю', 5),
  singular2ndPerson: Word('стругаешь', 5),
  singular3rdPerson: Word('стругает', 5),
  plural1stPerson: Word('стругаем', 5),
  plural2ndPerson: Word('стругаете', 5),
  plural3rdPerson: Word('стругают', 5),
  masculinePast: Word('стругал', 5),
  femininePast: Word('стругала', 5),
  neuterPast: Word('стругало', 5),
  pluralPast: Word('стругали', 5),
  imperativeInformal: Word('стругай', 5),
  imperativeFormal: Word('стругайте', 5),
  imperfect: [],
};

perfectVerbs.set(стругать.name.text, стругать);

export { стругать };