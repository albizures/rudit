import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сереть: PerfectVerb = {
  name: Word('сереть', 3),
  singular1stPerson: Word('серею', 3),
  singular2ndPerson: Word('сереешь', 3),
  singular3rdPerson: Word('сереет', 3),
  plural1stPerson: Word('сереем', 3),
  plural2ndPerson: Word('сереете', 3),
  plural3rdPerson: Word('сереют', 3),
  masculinePast: Word('серел', 3),
  femininePast: Word('серела', 3),
  neuterPast: Word('серело', 3),
  pluralPast: Word('серели', 3),
  imperativeInformal: Word('серей', 3),
  imperativeFormal: Word('серейте', 3),
  imperfect: [],
};

perfectVerbs.set(сереть.name.text, сереть);

export { сереть };