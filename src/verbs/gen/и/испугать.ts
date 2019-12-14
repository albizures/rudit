import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испугать: PerfectVerb = {
  name: Word('испугать', 5),
  singular1stPerson: Word('испугаю', 5),
  singular2ndPerson: Word('испугаешь', 5),
  singular3rdPerson: Word('испугает', 5),
  plural1stPerson: Word('испугаем', 5),
  plural2ndPerson: Word('испугаете', 5),
  plural3rdPerson: Word('испугают', 5),
  masculinePast: Word('испугал', 5),
  femininePast: Word('испугала', 5),
  neuterPast: Word('испугало', 5),
  pluralPast: Word('испугали', 5),
  imperativeInformal: Word('испугай', 5),
  imperativeFormal: Word('испугайте', 5),
  imperfect: ['пугать'],
};

perfectVerbs.set(испугать.name.text, испугать);

export { испугать };