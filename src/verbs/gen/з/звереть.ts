import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звереть: PerfectVerb = {
  name: Word('звереть', 4),
  singular1stPerson: Word('зверею', 4),
  singular2ndPerson: Word('звереешь', 4),
  singular3rdPerson: Word('звереет', 4),
  plural1stPerson: Word('звереем', 4),
  plural2ndPerson: Word('звереете', 4),
  plural3rdPerson: Word('звереют', 4),
  masculinePast: Word('зверел', 4),
  femininePast: Word('зверела', 4),
  neuterPast: Word('зверело', 4),
  pluralPast: Word('зверели', 4),
  imperativeInformal: Word('зверей', 4),
  imperativeFormal: Word('зверейте', 4),
  imperfect: [],
};

perfectVerbs.set(звереть.name.text, звереть);

export { звереть };