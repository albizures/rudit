import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взорвать: PerfectVerb = {
  name: Word('взорвать', 5),
  singular1stPerson: Word('взорву', 5),
  singular2ndPerson: Word('взорвёшь', 5),
  singular3rdPerson: Word('взорвёт', 5),
  plural1stPerson: Word('взорвём', 5),
  plural2ndPerson: Word('взорвёте', 5),
  plural3rdPerson: Word('взорвут', 5),
  masculinePast: Word('взорвал', 5),
  femininePast: Word('взорвала', 7),
  neuterPast: Word('взорвало', 5),
  pluralPast: Word('взорвали', 5),
  imperativeInformal: Word('взорви', 5),
  imperativeFormal: Word('взорвите', 5),
  imperfect: [],
};

perfectVerbs.set(взорвать.name.text, взорвать);

export { взорвать };