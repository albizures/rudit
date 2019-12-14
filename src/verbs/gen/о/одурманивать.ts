import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одурманивать: PerfectVerb = {
  name: Word('одурманивать', 5),
  singular1stPerson: Word('одурманиваю', 5),
  singular2ndPerson: Word('одурманиваешь', 5),
  singular3rdPerson: Word('одурманивает', 5),
  plural1stPerson: Word('одурманиваем', 5),
  plural2ndPerson: Word('одурманиваете', 5),
  plural3rdPerson: Word('одурманивают', 5),
  masculinePast: Word('одурманивал', 5),
  femininePast: Word('одурманивала', 5),
  neuterPast: Word('одурманивало', 5),
  pluralPast: Word('одурманивали', 5),
  imperativeInformal: Word('одурманивай', 5),
  imperativeFormal: Word('одурманивайте', 5),
  imperfect: [],
};

perfectVerbs.set(одурманивать.name.text, одурманивать);

export { одурманивать };