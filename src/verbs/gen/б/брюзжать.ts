import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брюзжать: PerfectVerb = {
  name: Word('брюзжать', 5),
  singular1stPerson: Word('брюзжу', 5),
  singular2ndPerson: Word('брюзжишь', 5),
  singular3rdPerson: Word('брюзжит', 5),
  plural1stPerson: Word('брюзжим', 5),
  plural2ndPerson: Word('брюзжите', 5),
  plural3rdPerson: Word('брюзжат', 5),
  masculinePast: Word('брюзжал', 5),
  femininePast: Word('брюзжала', 5),
  neuterPast: Word('брюзжало', 5),
  pluralPast: Word('брюзжали', 5),
  imperativeInformal: Word('брюзжи', 5),
  imperativeFormal: Word('брюзжите', 5),
  imperfect: [],
};

perfectVerbs.set(брюзжать.name.text, брюзжать);

export { брюзжать };