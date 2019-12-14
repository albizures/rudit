import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протереть: PerfectVerb = {
  name: Word('протереть', 6),
  singular1stPerson: Word('протру', 5),
  singular2ndPerson: Word('протрёшь', 5),
  singular3rdPerson: Word('протрёт', 5),
  plural1stPerson: Word('протрём', 5),
  plural2ndPerson: Word('протрёте', 5),
  plural3rdPerson: Word('протрут', 5),
  masculinePast: Word('протер', 4),
  femininePast: Word('протерла', 4),
  neuterPast: Word('протерло', 4),
  pluralPast: Word('протерли', 4),
  imperativeInformal: Word('протри', 5),
  imperativeFormal: Word('протрите', 5),
  imperfect: [],
};

perfectVerbs.set(протереть.name.text, протереть);

export { протереть };