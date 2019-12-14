import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмерзать: PerfectVerb = {
  name: Word('обмерзать', 6),
  singular1stPerson: Word('обмерзаю', 6),
  singular2ndPerson: Word('обмерзаешь', 6),
  singular3rdPerson: Word('обмерзает', 6),
  plural1stPerson: Word('обмерзаем', 6),
  plural2ndPerson: Word('обмерзаете', 6),
  plural3rdPerson: Word('обмерзают', 6),
  masculinePast: Word('обмерзал', 6),
  femininePast: Word('обмерзала', 6),
  neuterPast: Word('обмерзало', 6),
  pluralPast: Word('обмерзали', 6),
  imperativeInformal: Word('обмерзай', 6),
  imperativeFormal: Word('обмерзайте', 6),
  imperfect: [],
};

perfectVerbs.set(обмерзать.name.text, обмерзать);

export { обмерзать };