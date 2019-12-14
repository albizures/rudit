import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проклеивать: PerfectVerb = {
  name: Word('проклеивать', 5),
  singular1stPerson: Word('проклеиваю', 5),
  singular2ndPerson: Word('проклеиваешь', 5),
  singular3rdPerson: Word('проклеивает', 5),
  plural1stPerson: Word('проклеиваем', 5),
  plural2ndPerson: Word('проклеиваете', 5),
  plural3rdPerson: Word('проклеивают', 5),
  masculinePast: Word('проклеивал', 5),
  femininePast: Word('проклеивала', 5),
  neuterPast: Word('проклеивало', 5),
  pluralPast: Word('проклеивали', 5),
  imperativeInformal: Word('проклеивай', 5),
  imperativeFormal: Word('проклеивайте', 5),
  imperfect: [],
};

perfectVerbs.set(проклеивать.name.text, проклеивать);

export { проклеивать };