import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гореть: PerfectVerb = {
  name: Word('гореть', 3),
  singular1stPerson: Word('горю', 3),
  singular2ndPerson: Word('горишь', 3),
  singular3rdPerson: Word('горит', 3),
  plural1stPerson: Word('горим', 3),
  plural2ndPerson: Word('горите', 3),
  plural3rdPerson: Word('горят', 3),
  masculinePast: Word('горел', 3),
  femininePast: Word('горела', 3),
  neuterPast: Word('горело', 3),
  pluralPast: Word('горели', 3),
  imperativeInformal: Word('гори', 3),
  imperativeFormal: Word('горите', 3),
  imperfect: ['сгореть'],
};

perfectVerbs.set(гореть.name.text, гореть);

export { гореть };