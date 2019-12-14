import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блеснуть: PerfectVerb = {
  name: Word('блеснуть', 5),
  singular1stPerson: Word('блесну', 5),
  singular2ndPerson: Word('блеснёшь', 2),
  singular3rdPerson: Word('блеснёт', 2),
  plural1stPerson: Word('блеснём', 2),
  plural2ndPerson: Word('блеснёте', 2),
  plural3rdPerson: Word('блеснут', 5),
  masculinePast: Word('блеснул', 5),
  femininePast: Word('блеснула', 5),
  neuterPast: Word('блеснуло', 5),
  pluralPast: Word('блеснули', 5),
  imperativeInformal: Word('блесни', 5),
  imperativeFormal: Word('блесните', 5),
  imperfect: [],
};

perfectVerbs.set(блеснуть.name.text, блеснуть);

export { блеснуть };