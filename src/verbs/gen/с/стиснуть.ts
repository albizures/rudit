import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стиснуть: PerfectVerb = {
  name: Word('стиснуть', 2),
  singular1stPerson: Word('стисну', 2),
  singular2ndPerson: Word('стиснешь', 2),
  singular3rdPerson: Word('стиснет', 2),
  plural1stPerson: Word('стиснем', 2),
  plural2ndPerson: Word('стиснете', 2),
  plural3rdPerson: Word('стиснут', 2),
  masculinePast: Word('стиснул', 2),
  femininePast: Word('стиснула', 2),
  neuterPast: Word('стиснуло', 2),
  pluralPast: Word('стиснули', 2),
  imperativeInformal: Word('стисни', 2),
  imperativeFormal: Word('стисните', 2),
  imperfect: [],
};

perfectVerbs.set(стиснуть.name.text, стиснуть);

export { стиснуть };