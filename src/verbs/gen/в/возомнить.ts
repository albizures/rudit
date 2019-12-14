import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возомнить: PerfectVerb = {
  name: Word('возомнить', 6),
  singular1stPerson: Word('возомню', 6),
  singular2ndPerson: Word('возомнишь', 6),
  singular3rdPerson: Word('возомнит', 6),
  plural1stPerson: Word('возомним', 6),
  plural2ndPerson: Word('возомните', 6),
  plural3rdPerson: Word('возомнят', 6),
  masculinePast: Word('возомнил', 6),
  femininePast: Word('возомнила', 6),
  neuterPast: Word('возомнило', 6),
  pluralPast: Word('возомнили', 6),
  imperativeInformal: Word('возомни', 6),
  imperativeFormal: Word('возомните', 6),
  imperfect: [],
};

perfectVerbs.set(возомнить.name.text, возомнить);

export { возомнить };