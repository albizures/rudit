import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снести: PerfectVerb = {
  name: Word('снести', 5),
  singular1stPerson: Word('снесу', 4),
  singular2ndPerson: Word('снесёшь', 4),
  singular3rdPerson: Word('снесёт', 4),
  plural1stPerson: Word('снесём', 4),
  plural2ndPerson: Word('снесёте', 4),
  plural3rdPerson: Word('снесут', 4),
  masculinePast: Word('снёс', 2),
  femininePast: Word('снесла', 5),
  neuterPast: Word('снесло', 5),
  pluralPast: Word('снесли', 5),
  imperativeInformal: Word('снеси', 4),
  imperativeFormal: Word('снесите', 4),
  imperfect: [],
};

perfectVerbs.set(снести.name.text, снести);

export { снести };