import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обругать: PerfectVerb = {
  name: Word('обругать', 5),
  singular1stPerson: Word('обругаю', 5),
  singular2ndPerson: Word('обругаешь', 5),
  singular3rdPerson: Word('обругает', 5),
  plural1stPerson: Word('обругаем', 5),
  plural2ndPerson: Word('обругаете', 5),
  plural3rdPerson: Word('обругают', 5),
  masculinePast: Word('обругал', 5),
  femininePast: Word('обругала', 5),
  neuterPast: Word('обругало', 5),
  pluralPast: Word('обругали', 5),
  imperativeInformal: Word('обругай', 5),
  imperativeFormal: Word('обругайте', 5),
  imperfect: ['ругать'],
};

perfectVerbs.set(обругать.name.text, обругать);

export { обругать };