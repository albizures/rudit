import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспрыскивать: PerfectVerb = {
  name: Word('вспрыскивать', 4),
  singular1stPerson: Word('вспрыскиваю', 4),
  singular2ndPerson: Word('вспрыскиваешь', 4),
  singular3rdPerson: Word('вспрыскивает', 4),
  plural1stPerson: Word('вспрыскиваем', 4),
  plural2ndPerson: Word('вспрыскиваете', 4),
  plural3rdPerson: Word('вспрыскивают', 4),
  masculinePast: Word('вспрыскивал', 4),
  femininePast: Word('вспрыскивала', 4),
  neuterPast: Word('вспрыскивало', 4),
  pluralPast: Word('вспрыскивали', 4),
  imperativeInformal: Word('вспрыскивай', 4),
  imperativeFormal: Word('вспрыскивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вспрыскивать.name.text, вспрыскивать);

export { вспрыскивать };