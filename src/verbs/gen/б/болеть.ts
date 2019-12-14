import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const болеть: PerfectVerb = {
  name: Word('болеть', 3),
  singular1stPerson: Word('болею', 3),
  singular2ndPerson: Word('болеешь', 3),
  singular3rdPerson: Word('болеет', 3),
  plural1stPerson: Word('болеем', 3),
  plural2ndPerson: Word('болеете', 3),
  plural3rdPerson: Word('болеют', 3),
  masculinePast: Word('болел', 3),
  femininePast: Word('болела', 3),
  neuterPast: Word('болело', 3),
  pluralPast: Word('болели', 3),
  imperativeInformal: Word('болей', 3),
  imperativeFormal: Word('болейте', 3),
  imperfect: [],
};

perfectVerbs.set(болеть.name.text, болеть);

export { болеть };