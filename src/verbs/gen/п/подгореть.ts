import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгореть: PerfectVerb = {
  name: Word('подгореть', 6),
  singular1stPerson: Word('подгорю', 6),
  singular2ndPerson: Word('подгоришь', 6),
  singular3rdPerson: Word('подгорит', 6),
  plural1stPerson: Word('подгорим', 6),
  plural2ndPerson: Word('подгорите', 6),
  plural3rdPerson: Word('подгорят', 6),
  masculinePast: Word('подгорел', 6),
  femininePast: Word('подгорела', 6),
  neuterPast: Word('подгорело', 6),
  pluralPast: Word('подгорели', 6),
  imperativeInformal: Word('подгори', 6),
  imperativeFormal: Word('подгорите', 6),
  imperfect: [],
};

perfectVerbs.set(подгореть.name.text, подгореть);

export { подгореть };