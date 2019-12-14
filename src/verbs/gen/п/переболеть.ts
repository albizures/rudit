import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переболеть: PerfectVerb = {
  name: Word('переболеть', 7),
  singular1stPerson: Word('переболею', 7),
  singular2ndPerson: Word('переболеешь', 7),
  singular3rdPerson: Word('переболеет', 7),
  plural1stPerson: Word('переболеем', 7),
  plural2ndPerson: Word('переболеете', 7),
  plural3rdPerson: Word('переболеют', 7),
  masculinePast: Word('переболел', 7),
  femininePast: Word('переболела', 7),
  neuterPast: Word('переболело', 7),
  pluralPast: Word('переболели', 7),
  imperativeInformal: Word('переболей', 7),
  imperativeFormal: Word('переболейте', 7),
  imperfect: [],
};

perfectVerbs.set(переболеть.name.text, переболеть);

export { переболеть };