import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнищать: PerfectVerb = {
  name: Word('обнищать', 5),
  singular1stPerson: Word('обнищаю', 5),
  singular2ndPerson: Word('обнищаешь', 5),
  singular3rdPerson: Word('обнищает', 5),
  plural1stPerson: Word('обнищаем', 5),
  plural2ndPerson: Word('обнищаете', 5),
  plural3rdPerson: Word('обнищают', 5),
  masculinePast: Word('обнищал', 5),
  femininePast: Word('обнищала', 5),
  neuterPast: Word('обнищало', 5),
  pluralPast: Word('обнищали', 5),
  imperativeInformal: Word('обнищай', 5),
  imperativeFormal: Word('обнищайте', 5),
  imperfect: [],
};

perfectVerbs.set(обнищать.name.text, обнищать);

export { обнищать };