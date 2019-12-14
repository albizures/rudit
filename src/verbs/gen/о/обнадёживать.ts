import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнадёживать: PerfectVerb = {
  name: Word('обнадёживать', 5),
  singular1stPerson: Word('обнадёживаю', 5),
  singular2ndPerson: Word('обнадёживаешь', 5),
  singular3rdPerson: Word('обнадёживает', 5),
  plural1stPerson: Word('обнадёживаем', 5),
  plural2ndPerson: Word('обнадёживаете', 5),
  plural3rdPerson: Word('обнадёживают', 5),
  masculinePast: Word('обнадёживал', 5),
  femininePast: Word('обнадёживала', 5),
  neuterPast: Word('обнадёживало', 5),
  pluralPast: Word('обнадёживали', 5),
  imperativeInformal: Word('обнадёживай', 5),
  imperativeFormal: Word('обнадёживайте', 5),
  imperfect: [],
};

perfectVerbs.set(обнадёживать.name.text, обнадёживать);

export { обнадёживать };