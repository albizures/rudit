import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доесть: PerfectVerb = {
  name: Word('доесть', 2),
  singular1stPerson: Word('доем', 2),
  singular2ndPerson: Word('доешь', 2),
  singular3rdPerson: Word('доест', 2),
  plural1stPerson: Word('доедим', 4),
  plural2ndPerson: Word('доедите', 4),
  plural3rdPerson: Word('доедят', 4),
  masculinePast: Word('доел', 2),
  femininePast: Word('доела', 2),
  neuterPast: Word('доело', 2),
  pluralPast: Word('доели', 2),
  imperativeInformal: Word('доешь', 2),
  imperativeFormal: Word('доешьте', 2),
  imperfect: [],
};

perfectVerbs.set(доесть.name.text, доесть);

export { доесть };