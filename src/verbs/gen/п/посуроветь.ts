import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посуроветь: PerfectVerb = {
  name: Word('посуроветь', 5),
  singular1stPerson: Word('посуровею', 5),
  singular2ndPerson: Word('посуровеешь', 5),
  singular3rdPerson: Word('посуровеет', 5),
  plural1stPerson: Word('посуровеем', 5),
  plural2ndPerson: Word('посуровеете', 5),
  plural3rdPerson: Word('посуровеют', 5),
  masculinePast: Word('посуровел', 5),
  femininePast: Word('посуровела', 5),
  neuterPast: Word('посуровело', 5),
  pluralPast: Word('посуровели', 5),
  imperativeInformal: Word('посуровей', 5),
  imperativeFormal: Word('посуровейте', 5),
  imperfect: [],
};

perfectVerbs.set(посуроветь.name.text, посуроветь);

export { посуроветь };