import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разругать: PerfectVerb = {
  name: Word('разругать', 6),
  singular1stPerson: Word('разругаю', 6),
  singular2ndPerson: Word('разругаешь', 6),
  singular3rdPerson: Word('разругает', 6),
  plural1stPerson: Word('разругаем', 6),
  plural2ndPerson: Word('разругаете', 6),
  plural3rdPerson: Word('разругают', 6),
  masculinePast: Word('разругал', 6),
  femininePast: Word('разругала', 6),
  neuterPast: Word('разругало', 6),
  pluralPast: Word('разругали', 6),
  imperativeInformal: Word('разругай', 6),
  imperativeFormal: Word('разругайте', 6),
  imperfect: [],
};

perfectVerbs.set(разругать.name.text, разругать);

export { разругать };