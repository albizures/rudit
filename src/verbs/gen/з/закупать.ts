import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закупать: PerfectVerb = {
  name: Word('закупать', 5),
  singular1stPerson: Word('закупаю', 5),
  singular2ndPerson: Word('закупаешь', 5),
  singular3rdPerson: Word('закупает', 5),
  plural1stPerson: Word('закупаем', 5),
  plural2ndPerson: Word('закупаете', 5),
  plural3rdPerson: Word('закупают', 5),
  masculinePast: Word('закупал', 5),
  femininePast: Word('закупала', 5),
  neuterPast: Word('закупало', 5),
  pluralPast: Word('закупали', 5),
  imperativeInformal: Word('закупай', 5),
  imperativeFormal: Word('закупайте', 5),
  imperfect: [],
};

perfectVerbs.set(закупать.name.text, закупать);

export { закупать };