import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надтреснуть: PerfectVerb = {
  name: Word('надтреснуть', 5),
  singular1stPerson: Word('надтресну', 5),
  singular2ndPerson: Word('надтреснешь', 5),
  singular3rdPerson: Word('надтреснет', 5),
  plural1stPerson: Word('надтреснем', 5),
  plural2ndPerson: Word('надтреснете', 5),
  plural3rdPerson: Word('надтреснут', 5),
  masculinePast: Word('надтреснул', 5),
  femininePast: Word('надтреснула', 5),
  neuterPast: Word('надтреснуло', 5),
  pluralPast: Word('надтреснули', 5),
  imperativeInformal: Word('надтресни', 5),
  imperativeFormal: Word('надтресните', 5),
  imperfect: [],
};

perfectVerbs.set(надтреснуть.name.text, надтреснуть);

export { надтреснуть };