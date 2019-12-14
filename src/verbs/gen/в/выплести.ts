import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплести: PerfectVerb = {
  name: Word('выплести', 1),
  singular1stPerson: Word('выплету', 1),
  singular2ndPerson: Word('выплетешь', 1),
  singular3rdPerson: Word('выплетет', 1),
  plural1stPerson: Word('выплетем', 1),
  plural2ndPerson: Word('выплетете', 1),
  plural3rdPerson: Word('выплетут', 1),
  masculinePast: Word('выплел', 1),
  femininePast: Word('выплела', 1),
  neuterPast: Word('выплело', 1),
  pluralPast: Word('выплели', 1),
  imperativeInformal: Word('выплети', 1),
  imperativeFormal: Word('выплетите', 1),
  imperfect: [],
};

perfectVerbs.set(выплести.name.text, выплести);

export { выплести };