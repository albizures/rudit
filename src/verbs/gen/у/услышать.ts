import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const услышать: PerfectVerb = {
  name: Word('услышать', 3),
  singular1stPerson: Word('услышу', 3),
  singular2ndPerson: Word('услышишь', 3),
  singular3rdPerson: Word('услышит', 3),
  plural1stPerson: Word('услышим', 3),
  plural2ndPerson: Word('услышите', 3),
  plural3rdPerson: Word('услышат', 3),
  masculinePast: Word('услышал', 3),
  femininePast: Word('услышала', 3),
  neuterPast: Word('услышало', 3),
  pluralPast: Word('услышали', 3),
  imperativeInformal: Word('услышь', 3),
  imperativeFormal: Word('услышьте', 3),
  imperfect: ['слышать'],
};

perfectVerbs.set(услышать.name.text, услышать);

export { услышать };