import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обминать: PerfectVerb = {
  name: Word('обминать', 5),
  singular1stPerson: Word('обминаю', 5),
  singular2ndPerson: Word('обминаешь', 5),
  singular3rdPerson: Word('обминает', 5),
  plural1stPerson: Word('обминаем', 5),
  plural2ndPerson: Word('обминаете', 5),
  plural3rdPerson: Word('обминают', 5),
  masculinePast: Word('обминал', 5),
  femininePast: Word('обминала', 5),
  neuterPast: Word('обминало', 5),
  pluralPast: Word('обминали', 5),
  imperativeInformal: Word('обминай', 5),
  imperativeFormal: Word('обминайте', 5),
  imperfect: [],
};

perfectVerbs.set(обминать.name.text, обминать);

export { обминать };