import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усложнить: PerfectVerb = {
  name: Word('усложнить', 6),
  singular1stPerson: Word('усложню', 6),
  singular2ndPerson: Word('усложнишь', 6),
  singular3rdPerson: Word('усложнит', 6),
  plural1stPerson: Word('усложним', 6),
  plural2ndPerson: Word('усложните', 6),
  plural3rdPerson: Word('усложнят', 6),
  masculinePast: Word('усложнил', 6),
  femininePast: Word('усложнила', 6),
  neuterPast: Word('усложнило', 6),
  pluralPast: Word('усложнили', 6),
  imperativeInformal: Word('усложни', 6),
  imperativeFormal: Word('усложните', 6),
  imperfect: ['усложнять'],
};

perfectVerbs.set(усложнить.name.text, усложнить);

export { усложнить };