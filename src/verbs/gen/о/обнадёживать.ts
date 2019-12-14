import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнадёживать: PerfectVerb = {
  name: Word('обнадёживать', 3),
  singular1stPerson: Word('обнадёживаю', 3),
  singular2ndPerson: Word('обнадёживаешь', 3),
  singular3rdPerson: Word('обнадёживает', 3),
  plural1stPerson: Word('обнадёживаем', 3),
  plural2ndPerson: Word('обнадёживаете', 3),
  plural3rdPerson: Word('обнадёживают', 3),
  masculinePast: Word('обнадёживал', 3),
  femininePast: Word('обнадёживала', 3),
  neuterPast: Word('обнадёживало', 3),
  pluralPast: Word('обнадёживали', 3),
  imperativeInformal: Word('обнадёживай', 3),
  imperativeFormal: Word('обнадёживайте', 3),
  imperfect: [],
};

perfectVerbs.set(обнадёживать.name.text, обнадёживать);

export { обнадёживать };