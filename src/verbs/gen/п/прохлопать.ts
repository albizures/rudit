import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохлопать: PerfectVerb = {
  name: Word('прохлопать', 5),
  singular1stPerson: Word('прохлопаю', 5),
  singular2ndPerson: Word('прохлопаешь', 5),
  singular3rdPerson: Word('прохлопает', 5),
  plural1stPerson: Word('прохлопаем', 5),
  plural2ndPerson: Word('прохлопаете', 5),
  plural3rdPerson: Word('прохлопают', 5),
  masculinePast: Word('прохлопал', 5),
  femininePast: Word('прохлопала', 5),
  neuterPast: Word('прохлопало', 5),
  pluralPast: Word('прохлопали', 5),
  imperativeInformal: Word('прохлопай', 5),
  imperativeFormal: Word('прохлопайте', 5),
  imperfect: [],
};

perfectVerbs.set(прохлопать.name.text, прохлопать);

export { прохлопать };