import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упомнить: PerfectVerb = {
  name: Word('упомнить', 2),
  singular1stPerson: Word('упомню', 2),
  singular2ndPerson: Word('упомнишь', 2),
  singular3rdPerson: Word('упомнит', 2),
  plural1stPerson: Word('упомним', 2),
  plural2ndPerson: Word('упомните', 2),
  plural3rdPerson: Word('упомнят', 2),
  masculinePast: Word('упомнил', 2),
  femininePast: Word('упомнила', 2),
  neuterPast: Word('упомнило', 2),
  pluralPast: Word('упомнили', 2),
  imperativeInformal: Word('упомни', 2),
  imperativeFormal: Word('упомните', 2),
  imperfect: [],
};

perfectVerbs.set(упомнить.name.text, упомнить);

export { упомнить };