import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбрызгивать: PerfectVerb = {
  name: Word('разбрызгивать', 5),
  singular1stPerson: Word('разбрызгиваю', 5),
  singular2ndPerson: Word('разбрызгиваешь', 5),
  singular3rdPerson: Word('разбрызгивает', 5),
  plural1stPerson: Word('разбрызгиваем', 5),
  plural2ndPerson: Word('разбрызгиваете', 5),
  plural3rdPerson: Word('разбрызгивают', 5),
  masculinePast: Word('разбрызгивал', 5),
  femininePast: Word('разбрызгивала', 5),
  neuterPast: Word('разбрызгивало', 5),
  pluralPast: Word('разбрызгивали', 5),
  imperativeInformal: Word('разбрызгивай', 5),
  imperativeFormal: Word('разбрызгивайте', 5),
  imperfect: [],
};

perfectVerbs.set(разбрызгивать.name.text, разбрызгивать);

export { разбрызгивать };