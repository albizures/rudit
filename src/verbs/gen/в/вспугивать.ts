import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспугивать: PerfectVerb = {
  name: Word('вспугивать', 3),
  singular1stPerson: Word('вспугиваю', 3),
  singular2ndPerson: Word('вспугиваешь', 3),
  singular3rdPerson: Word('вспугивает', 3),
  plural1stPerson: Word('вспугиваем', 3),
  plural2ndPerson: Word('вспугиваете', 3),
  plural3rdPerson: Word('вспугивают', 3),
  masculinePast: Word('вспугивал', 3),
  femininePast: Word('вспугивала', 3),
  neuterPast: Word('вспугивало', 3),
  pluralPast: Word('вспугивали', 3),
  imperativeInformal: Word('вспугивай', 3),
  imperativeFormal: Word('вспугивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вспугивать.name.text, вспугивать);

export { вспугивать };