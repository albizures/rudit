import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затуманивать: PerfectVerb = {
  name: Word('затуманивать', 5),
  singular1stPerson: Word('затуманиваю', 5),
  singular2ndPerson: Word('затуманиваешь', 5),
  singular3rdPerson: Word('затуманивает', 5),
  plural1stPerson: Word('затуманиваем', 5),
  plural2ndPerson: Word('затуманиваете', 5),
  plural3rdPerson: Word('затуманивают', 5),
  masculinePast: Word('затуманивал', 5),
  femininePast: Word('затуманивала', 5),
  neuterPast: Word('затуманивало', 5),
  pluralPast: Word('затуманивали', 5),
  imperativeInformal: Word('затуманивай', 5),
  imperativeFormal: Word('затуманивайте', 5),
  imperfect: [],
};

perfectVerbs.set(затуманивать.name.text, затуманивать);

export { затуманивать };