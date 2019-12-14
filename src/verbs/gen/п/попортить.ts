import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попортить: PerfectVerb = {
  name: Word('попортить', 3),
  singular1stPerson: Word('попорчу', 3),
  singular2ndPerson: Word('попортишь', 3),
  singular3rdPerson: Word('попортит', 3),
  plural1stPerson: Word('попортим', 3),
  plural2ndPerson: Word('попортите', 3),
  plural3rdPerson: Word('попортят', 3),
  masculinePast: Word('попортил', 3),
  femininePast: Word('попортила', 3),
  neuterPast: Word('попортило', 3),
  pluralPast: Word('попортили', 3),
  imperativeInformal: Word('попорти', 3),
  imperativeFormal: Word('попортите', 3),
  imperfect: [],
};

perfectVerbs.set(попортить.name.text, попортить);

export { попортить };