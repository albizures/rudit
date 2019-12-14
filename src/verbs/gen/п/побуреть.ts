import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побуреть: PerfectVerb = {
  name: Word('побуреть', 5),
  singular1stPerson: Word('побурею', 5),
  singular2ndPerson: Word('побуреешь', 5),
  singular3rdPerson: Word('побуреет', 5),
  plural1stPerson: Word('побуреем', 5),
  plural2ndPerson: Word('побуреете', 5),
  plural3rdPerson: Word('побуреют', 5),
  masculinePast: Word('побурел', 5),
  femininePast: Word('побурела', 5),
  neuterPast: Word('побурело', 5),
  pluralPast: Word('побурели', 5),
  imperativeInformal: Word('побурей', 5),
  imperativeFormal: Word('побурейте', 5),
  imperfect: [],
};

perfectVerbs.set(побуреть.name.text, побуреть);

export { побуреть };