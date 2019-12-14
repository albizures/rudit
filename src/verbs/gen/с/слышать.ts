import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слышать: PerfectVerb = {
  name: Word('слышать', 2),
  singular1stPerson: Word('слышу', 2),
  singular2ndPerson: Word('слышишь', 2),
  singular3rdPerson: Word('слышит', 2),
  plural1stPerson: Word('слышим', 2),
  plural2ndPerson: Word('слышите', 2),
  plural3rdPerson: Word('слышат', 2),
  masculinePast: Word('слышал', 2),
  femininePast: Word('слышала', 2),
  neuterPast: Word('слышало', 2),
  pluralPast: Word('слышали', 2),
  imperativeInformal: Word('слышь', 2),
  imperativeFormal: Word('слышьте', 2),
  imperfect: ['услышать'],
};

perfectVerbs.set(слышать.name.text, слышать);

export { слышать };