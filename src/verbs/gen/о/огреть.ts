import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огреть: PerfectVerb = {
  name: Word('огреть', 3),
  singular1stPerson: Word('огрею', 3),
  singular2ndPerson: Word('огреешь', 3),
  singular3rdPerson: Word('огреет', 3),
  plural1stPerson: Word('огреем', 3),
  plural2ndPerson: Word('огреете', 3),
  plural3rdPerson: Word('огреют', 3),
  masculinePast: Word('огрел', 3),
  femininePast: Word('огрела', 3),
  neuterPast: Word('огрело', 3),
  pluralPast: Word('огрели', 3),
  imperativeInformal: Word('огрей', 3),
  imperativeFormal: Word('огрейте', 3),
  imperfect: [],
};

perfectVerbs.set(огреть.name.text, огреть);

export { огреть };