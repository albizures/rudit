import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припоминать: PerfectVerb = {
  name: Word('припоминать', 8),
  singular1stPerson: Word('припоминаю', 8),
  singular2ndPerson: Word('припоминаешь', 8),
  singular3rdPerson: Word('припоминает', 8),
  plural1stPerson: Word('припоминаем', 8),
  plural2ndPerson: Word('припоминаете', 8),
  plural3rdPerson: Word('припоминают', 8),
  masculinePast: Word('припоминал', 8),
  femininePast: Word('припоминала', 8),
  neuterPast: Word('припоминало', 8),
  pluralPast: Word('припоминали', 8),
  imperativeInformal: Word('припоминай', 8),
  imperativeFormal: Word('припоминайте', 8),
  imperfect: [],
};

perfectVerbs.set(припоминать.name.text, припоминать);

export { припоминать };