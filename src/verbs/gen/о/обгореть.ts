import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгореть: PerfectVerb = {
  name: Word('обгореть', 5),
  singular1stPerson: Word('обгорю', 5),
  singular2ndPerson: Word('обгоришь', 5),
  singular3rdPerson: Word('обгорит', 5),
  plural1stPerson: Word('обгорим', 5),
  plural2ndPerson: Word('обгорите', 5),
  plural3rdPerson: Word('обгорят', 5),
  masculinePast: Word('обгорел', 5),
  femininePast: Word('обгорела', 5),
  neuterPast: Word('обгорело', 5),
  pluralPast: Word('обгорели', 5),
  imperativeInformal: Word('обгори', 5),
  imperativeFormal: Word('обгорите', 5),
  imperfect: [],
};

perfectVerbs.set(обгореть.name.text, обгореть);

export { обгореть };