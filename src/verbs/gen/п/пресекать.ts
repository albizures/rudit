import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресекать: PerfectVerb = {
  name: Word('пресекать', 6),
  singular1stPerson: Word('пресекаю', 6),
  singular2ndPerson: Word('пресекаешь', 6),
  singular3rdPerson: Word('пресекает', 6),
  plural1stPerson: Word('пресекаем', 6),
  plural2ndPerson: Word('пресекаете', 6),
  plural3rdPerson: Word('пресекают', 6),
  masculinePast: Word('пресекал', 6),
  femininePast: Word('пресекала', 6),
  neuterPast: Word('пресекало', 6),
  pluralPast: Word('пресекали', 6),
  imperativeInformal: Word('пресекай', 6),
  imperativeFormal: Word('пресекайте', 6),
  imperfect: [],
};

perfectVerbs.set(пресекать.name.text, пресекать);

export { пресекать };