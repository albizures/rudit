import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постукивать: PerfectVerb = {
  name: Word('постукивать', 4),
  singular1stPerson: Word('постукиваю', 4),
  singular2ndPerson: Word('постукиваешь', 4),
  singular3rdPerson: Word('постукивает', 4),
  plural1stPerson: Word('постукиваем', 4),
  plural2ndPerson: Word('постукиваете', 4),
  plural3rdPerson: Word('постукивают', 4),
  masculinePast: Word('постукивал', 4),
  femininePast: Word('постукивала', 4),
  neuterPast: Word('постукивало', 4),
  pluralPast: Word('постукивали', 4),
  imperativeInformal: Word('постукивай', 4),
  imperativeFormal: Word('постукивайте', 4),
  imperfect: [],
};

perfectVerbs.set(постукивать.name.text, постукивать);

export { постукивать };