import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втаскивать: PerfectVerb = {
  name: Word('втаскивать', 2),
  singular1stPerson: Word('втаскиваю', 2),
  singular2ndPerson: Word('втаскиваешь', 2),
  singular3rdPerson: Word('втаскивает', 2),
  plural1stPerson: Word('втаскиваем', 2),
  plural2ndPerson: Word('втаскиваете', 2),
  plural3rdPerson: Word('втаскивают', 2),
  masculinePast: Word('втаскивал', 2),
  femininePast: Word('втаскивала', 2),
  neuterPast: Word('втаскивало', 2),
  pluralPast: Word('втаскивали', 2),
  imperativeInformal: Word('втаскивай', 2),
  imperativeFormal: Word('втаскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(втаскивать.name.text, втаскивать);

export { втаскивать };