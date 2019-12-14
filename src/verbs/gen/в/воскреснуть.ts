import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воскреснуть: PerfectVerb = {
  name: Word('воскреснуть', 5),
  singular1stPerson: Word('воскресну', 5),
  singular2ndPerson: Word('воскреснешь', 5),
  singular3rdPerson: Word('воскреснет', 5),
  plural1stPerson: Word('воскреснем', 5),
  plural2ndPerson: Word('воскреснете', 5),
  plural3rdPerson: Word('воскреснут', 5),
  masculinePast: Word('воскрес', 5),
  femininePast: Word('воскресла', 5),
  neuterPast: Word('воскресло', 5),
  pluralPast: Word('воскресли', 5),
  imperativeInformal: Word('воскресни', 5),
  imperativeFormal: Word('воскресните', 5),
  imperfect: [],
};

perfectVerbs.set(воскреснуть.name.text, воскреснуть);

export { воскреснуть };