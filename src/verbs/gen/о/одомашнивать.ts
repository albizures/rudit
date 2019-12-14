import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одомашнивать: PerfectVerb = {
  name: Word('одомашнивать', 4),
  singular1stPerson: Word('одомашниваю', 4),
  singular2ndPerson: Word('одомашниваешь', 4),
  singular3rdPerson: Word('одомашнивает', 4),
  plural1stPerson: Word('одомашниваем', 4),
  plural2ndPerson: Word('одомашниваете', 4),
  plural3rdPerson: Word('одомашнивают', 4),
  masculinePast: Word('одомашнивал', 4),
  femininePast: Word('одомашнивала', 4),
  neuterPast: Word('одомашнивало', 4),
  pluralPast: Word('одомашнивали', 4),
  imperativeInformal: Word('одомашнивай', 4),
  imperativeFormal: Word('одомашнивайте', 4),
  imperfect: [],
};

perfectVerbs.set(одомашнивать.name.text, одомашнивать);

export { одомашнивать };