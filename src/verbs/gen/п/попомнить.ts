import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попомнить: PerfectVerb = {
  name: Word('попомнить', 3),
  singular1stPerson: Word('попомню', 3),
  singular2ndPerson: Word('попомнишь', 3),
  singular3rdPerson: Word('попомнит', 3),
  plural1stPerson: Word('попомним', 3),
  plural2ndPerson: Word('попомните', 3),
  plural3rdPerson: Word('попомнят', 3),
  masculinePast: Word('попомнил', 3),
  femininePast: Word('попомнила', 3),
  neuterPast: Word('попомнило', 3),
  pluralPast: Word('попомнили', 3),
  imperativeInformal: Word('попомни', 3),
  imperativeFormal: Word('попомните', 3),
  imperfect: [],
};

perfectVerbs.set(попомнить.name.text, попомнить);

export { попомнить };