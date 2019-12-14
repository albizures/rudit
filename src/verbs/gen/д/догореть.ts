import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догореть: PerfectVerb = {
  name: Word('догореть', 5),
  singular1stPerson: Word('догорю', 5),
  singular2ndPerson: Word('догоришь', 5),
  singular3rdPerson: Word('догорит', 5),
  plural1stPerson: Word('догорим', 5),
  plural2ndPerson: Word('догорите', 5),
  plural3rdPerson: Word('догорят', 5),
  masculinePast: Word('догорел', 5),
  femininePast: Word('догорела', 5),
  neuterPast: Word('догорело', 5),
  pluralPast: Word('догорели', 5),
  imperativeInformal: Word('догори', 5),
  imperativeFormal: Word('догорите', 5),
  imperfect: [],
};

perfectVerbs.set(догореть.name.text, догореть);

export { догореть };