import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ахать: PerfectVerb = {
  name: Word('ахать', 0),
  singular1stPerson: Word('ахаю', 0),
  singular2ndPerson: Word('ахаешь', 0),
  singular3rdPerson: Word('ахает', 0),
  plural1stPerson: Word('ахаем', 0),
  plural2ndPerson: Word('ахаете', 0),
  plural3rdPerson: Word('ахают', 0),
  masculinePast: Word('ахал', 0),
  femininePast: Word('ахала', 0),
  neuterPast: Word('ахало', 0),
  pluralPast: Word('ахали', 0),
  imperativeInformal: Word('ахай', 0),
  imperativeFormal: Word('ахайте', 0),
  imperfect: [],
};

perfectVerbs.set(ахать.name.text, ахать);

export { ахать };