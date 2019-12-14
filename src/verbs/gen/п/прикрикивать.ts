import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрикивать: PerfectVerb = {
  name: Word('прикрикивать', 5),
  singular1stPerson: Word('прикрикиваю', 5),
  singular2ndPerson: Word('прикрикиваешь', 5),
  singular3rdPerson: Word('прикрикивает', 5),
  plural1stPerson: Word('прикрикиваем', 5),
  plural2ndPerson: Word('прикрикиваете', 5),
  plural3rdPerson: Word('прикрикивают', 5),
  masculinePast: Word('прикрикивал', 5),
  femininePast: Word('прикрикивала', 5),
  neuterPast: Word('прикрикивало', 5),
  pluralPast: Word('прикрикивали', 5),
  imperativeInformal: Word('прикрикивай', 5),
  imperativeFormal: Word('прикрикивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прикрикивать.name.text, прикрикивать);

export { прикрикивать };