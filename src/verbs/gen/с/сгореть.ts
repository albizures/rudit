import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгореть: PerfectVerb = {
  name: Word('сгореть', 4),
  singular1stPerson: Word('сгорю', 4),
  singular2ndPerson: Word('сгоришь', 4),
  singular3rdPerson: Word('сгорит', 4),
  plural1stPerson: Word('сгорим', 4),
  plural2ndPerson: Word('сгорите', 4),
  plural3rdPerson: Word('сгорят', 4),
  masculinePast: Word('сгорел', 4),
  femininePast: Word('сгорела', 4),
  neuterPast: Word('сгорело', 4),
  pluralPast: Word('сгорели', 4),
  imperativeInformal: Word('сгори', 4),
  imperativeFormal: Word('сгорите', 4),
  imperfect: ['гореть'],
};

perfectVerbs.set(сгореть.name.text, сгореть);

export { сгореть };