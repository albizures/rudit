import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ныть: PerfectVerb = {
  name: Word('ныть', 1),
  singular1stPerson: Word('ною', 1),
  singular2ndPerson: Word('ноешь', 1),
  singular3rdPerson: Word('ноет', 1),
  plural1stPerson: Word('ноем', 1),
  plural2ndPerson: Word('ноете', 1),
  plural3rdPerson: Word('ноют', 1),
  masculinePast: Word('ныл', 1),
  femininePast: Word('ныла', 1),
  neuterPast: Word('ныло', 1),
  pluralPast: Word('ныли', 1),
  imperativeInformal: Word('ной', 1),
  imperativeFormal: Word('нойте', 1),
  imperfect: [],
};

perfectVerbs.set(ныть.name.text, ныть);

export { ныть };