import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрастать: PerfectVerb = {
  name: Word('обрастать', 6),
  singular1stPerson: Word('обрастаю', 6),
  singular2ndPerson: Word('обрастаешь', 6),
  singular3rdPerson: Word('обрастает', 6),
  plural1stPerson: Word('обрастаем', 6),
  plural2ndPerson: Word('обрастаете', 6),
  plural3rdPerson: Word('обрастают', 6),
  masculinePast: Word('обрастал', 6),
  femininePast: Word('обрастала', 6),
  neuterPast: Word('обрастало', 6),
  pluralPast: Word('обрастали', 6),
  imperativeInformal: Word('обрастай', 6),
  imperativeFormal: Word('обрастайте', 6),
  imperfect: [],
};

perfectVerbs.set(обрастать.name.text, обрастать);

export { обрастать };