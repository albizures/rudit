import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const основать: PerfectVerb = {
  name: Word('основать', 5),
  singular1stPerson: Word('осную', 4),
  singular2ndPerson: Word('оснуёшь', 0),
  singular3rdPerson: Word('оснуёт', 0),
  plural1stPerson: Word('оснуём', 0),
  plural2ndPerson: Word('оснуёте', 6),
  plural3rdPerson: Word('оснуют', 4),
  masculinePast: Word('основал', 5),
  femininePast: Word('основала', 5),
  neuterPast: Word('основало', 5),
  pluralPast: Word('основали', 5),
  imperativeInformal: Word('оснуй', 3),
  imperativeFormal: Word('оснуйте', 3),
  imperfect: ['основывать'],
};

perfectVerbs.set(основать.name.text, основать);

export { основать };