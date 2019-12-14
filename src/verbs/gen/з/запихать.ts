import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запихать: PerfectVerb = {
  name: Word('запихать', 5),
  singular1stPerson: Word('запихаю', 5),
  singular2ndPerson: Word('запихаешь', 5),
  singular3rdPerson: Word('запихает', 5),
  plural1stPerson: Word('запихаем', 5),
  plural2ndPerson: Word('запихаете', 5),
  plural3rdPerson: Word('запихают', 5),
  masculinePast: Word('запихал', 5),
  femininePast: Word('запихала', 5),
  neuterPast: Word('запихало', 5),
  pluralPast: Word('запихали', 5),
  imperativeInformal: Word('запихай', 5),
  imperativeFormal: Word('запихайте', 5),
  imperfect: [],
};

perfectVerbs.set(запихать.name.text, запихать);

export { запихать };