import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгореть: PerfectVerb = {
  name: Word('выгореть', 1),
  singular1stPerson: Word('выгорю', 1),
  singular2ndPerson: Word('выгоришь', 1),
  singular3rdPerson: Word('выгорит', 1),
  plural1stPerson: Word('выгорим', 1),
  plural2ndPerson: Word('выгорите', 1),
  plural3rdPerson: Word('выгорят', 1),
  masculinePast: Word('выгорел', 1),
  femininePast: Word('выгорела', 1),
  neuterPast: Word('выгорело', 1),
  pluralPast: Word('выгорели', 1),
  imperativeInformal: Word('выгори', 1),
  imperativeFormal: Word('выгорите', 1),
  imperfect: [],
};

perfectVerbs.set(выгореть.name.text, выгореть);

export { выгореть };