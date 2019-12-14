import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забрызгивать: PerfectVerb = {
  name: Word('забрызгивать', 4),
  singular1stPerson: Word('забрызгиваю', 4),
  singular2ndPerson: Word('забрызгиваешь', 4),
  singular3rdPerson: Word('забрызгивает', 4),
  plural1stPerson: Word('забрызгиваем', 4),
  plural2ndPerson: Word('забрызгиваете', 4),
  plural3rdPerson: Word('забрызгивают', 4),
  masculinePast: Word('забрызгивал', 4),
  femininePast: Word('забрызгивала', 4),
  neuterPast: Word('забрызгивало', 4),
  pluralPast: Word('забрызгивали', 4),
  imperativeInformal: Word('забрызгивай', 4),
  imperativeFormal: Word('забрызгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(забрызгивать.name.text, забрызгивать);

export { забрызгивать };