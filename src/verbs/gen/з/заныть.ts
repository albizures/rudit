import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заныть: PerfectVerb = {
  name: Word('заныть', 3),
  singular1stPerson: Word('заною', 3),
  singular2ndPerson: Word('заноешь', 3),
  singular3rdPerson: Word('заноет', 3),
  plural1stPerson: Word('заноем', 3),
  plural2ndPerson: Word('заноете', 3),
  plural3rdPerson: Word('заноют', 3),
  masculinePast: Word('заныл', 3),
  femininePast: Word('заныла', 3),
  neuterPast: Word('заныло', 3),
  pluralPast: Word('заныли', 3),
  imperativeInformal: Word('заной', 3),
  imperativeFormal: Word('занойте', 3),
  imperfect: [],
};

perfectVerbs.set(заныть.name.text, заныть);

export { заныть };