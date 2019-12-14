import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разменивать: PerfectVerb = {
  name: Word('разменивать', 4),
  singular1stPerson: Word('размениваю', 4),
  singular2ndPerson: Word('размениваешь', 4),
  singular3rdPerson: Word('разменивает', 4),
  plural1stPerson: Word('размениваем', 4),
  plural2ndPerson: Word('размениваете', 4),
  plural3rdPerson: Word('разменивают', 4),
  masculinePast: Word('разменивал', 4),
  femininePast: Word('разменивала', 4),
  neuterPast: Word('разменивало', 4),
  pluralPast: Word('разменивали', 4),
  imperativeInformal: Word('разменивай', 4),
  imperativeFormal: Word('разменивайте', 4),
  imperfect: [],
};

perfectVerbs.set(разменивать.name.text, разменивать);

export { разменивать };