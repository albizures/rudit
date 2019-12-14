import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реветь: PerfectVerb = {
  name: Word('реветь', 3),
  singular1stPerson: Word('реву', 3),
  singular2ndPerson: Word('ревёшь', 3),
  singular3rdPerson: Word('ревёт', 3),
  plural1stPerson: Word('ревём', 3),
  plural2ndPerson: Word('ревёте', 3),
  plural3rdPerson: Word('ревут', 3),
  masculinePast: Word('ревел', 3),
  femininePast: Word('ревела', 3),
  neuterPast: Word('ревело', 3),
  pluralPast: Word('ревели', 3),
  imperativeInformal: Word('реви', 3),
  imperativeFormal: Word('ревите', 3),
  imperfect: [],
};

perfectVerbs.set(реветь.name.text, реветь);

export { реветь };