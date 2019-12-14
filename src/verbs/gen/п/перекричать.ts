import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекричать: PerfectVerb = {
  name: Word('перекричать', 8),
  singular1stPerson: Word('перекричу', 8),
  singular2ndPerson: Word('перекричишь', 8),
  singular3rdPerson: Word('перекричит', 8),
  plural1stPerson: Word('перекричим', 8),
  plural2ndPerson: Word('перекричите', 8),
  plural3rdPerson: Word('перекричат', 8),
  masculinePast: Word('перекричал', 8),
  femininePast: Word('перекричала', 8),
  neuterPast: Word('перекричало', 8),
  pluralPast: Word('перекричали', 8),
  imperativeInformal: Word('перекричи', 8),
  imperativeFormal: Word('перекричите', 8),
  imperfect: [],
};

perfectVerbs.set(перекричать.name.text, перекричать);

export { перекричать };