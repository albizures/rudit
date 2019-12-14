import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повисеть: PerfectVerb = {
  name: Word('повисеть', 5),
  singular1stPerson: Word('повишу', 5),
  singular2ndPerson: Word('повисишь', 5),
  singular3rdPerson: Word('повисит', 5),
  plural1stPerson: Word('повисим', 5),
  plural2ndPerson: Word('повисите', 5),
  plural3rdPerson: Word('повисят', 5),
  masculinePast: Word('повисел', 5),
  femininePast: Word('повисела', 5),
  neuterPast: Word('повисело', 5),
  pluralPast: Word('повисели', 5),
  imperativeInformal: Word('повиси', 5),
  imperativeFormal: Word('повисите', 5),
  imperfect: [],
};

perfectVerbs.set(повисеть.name.text, повисеть);

export { повисеть };