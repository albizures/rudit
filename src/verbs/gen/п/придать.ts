import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придать: PerfectVerb = {
  name: Word('придать', 4),
  singular1stPerson: Word('придам', 4),
  singular2ndPerson: Word('придашь', 4),
  singular3rdPerson: Word('придаст', 4),
  plural1stPerson: Word('придадим', 6),
  plural2ndPerson: Word('придадите', 6),
  plural3rdPerson: Word('придадут', 6),
  masculinePast: Word('придал', 4),
  femininePast: Word('придала', 6),
  neuterPast: Word('придало', 4),
  pluralPast: Word('придали', 4),
  imperativeInformal: Word('придай', 4),
  imperativeFormal: Word('придайте', 4),
  imperfect: [],
};

perfectVerbs.set(придать.name.text, придать);

export { придать };