import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрубать: PerfectVerb = {
  name: Word('обрубать', 5),
  singular1stPerson: Word('обрубаю', 5),
  singular2ndPerson: Word('обрубаешь', 5),
  singular3rdPerson: Word('обрубает', 5),
  plural1stPerson: Word('обрубаем', 5),
  plural2ndPerson: Word('обрубаете', 5),
  plural3rdPerson: Word('обрубают', 5),
  masculinePast: Word('обрубал', 5),
  femininePast: Word('обрубала', 5),
  neuterPast: Word('обрубало', 5),
  pluralPast: Word('обрубали', 5),
  imperativeInformal: Word('обрубай', 5),
  imperativeFormal: Word('обрубайте', 5),
  imperfect: [],
};

perfectVerbs.set(обрубать.name.text, обрубать);

export { обрубать };