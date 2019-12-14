import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высушивать: PerfectVerb = {
  name: Word('высушивать', 3),
  singular1stPerson: Word('высушиваю', 3),
  singular2ndPerson: Word('высушиваешь', 3),
  singular3rdPerson: Word('высушивает', 3),
  plural1stPerson: Word('высушиваем', 3),
  plural2ndPerson: Word('высушиваете', 3),
  plural3rdPerson: Word('высушивают', 3),
  masculinePast: Word('высушивал', 3),
  femininePast: Word('высушивала', 3),
  neuterPast: Word('высушивало', 3),
  pluralPast: Word('высушивали', 3),
  imperativeInformal: Word('высушивай', 3),
  imperativeFormal: Word('высушивайте', 3),
  imperfect: [],
};

perfectVerbs.set(высушивать.name.text, высушивать);

export { высушивать };