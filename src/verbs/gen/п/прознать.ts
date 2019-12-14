import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прознать: PerfectVerb = {
  name: Word('прознать', 5),
  singular1stPerson: Word('прознаю', 5),
  singular2ndPerson: Word('прознаешь', 5),
  singular3rdPerson: Word('прознает', 5),
  plural1stPerson: Word('прознаем', 5),
  plural2ndPerson: Word('прознаете', 5),
  plural3rdPerson: Word('прознают', 5),
  masculinePast: Word('прознал', 5),
  femininePast: Word('прознала', 5),
  neuterPast: Word('прознало', 5),
  pluralPast: Word('прознали', 5),
  imperativeInformal: Word('прознай', 5),
  imperativeFormal: Word('прознайте', 5),
  imperfect: [],
};

perfectVerbs.set(прознать.name.text, прознать);

export { прознать };