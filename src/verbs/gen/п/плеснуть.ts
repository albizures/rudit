import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плеснуть: PerfectVerb = {
  name: Word('плеснуть', 5),
  singular1stPerson: Word('плесну', 5),
  singular2ndPerson: Word('плеснёшь', 5),
  singular3rdPerson: Word('плеснёт', 5),
  plural1stPerson: Word('плеснём', 5),
  plural2ndPerson: Word('плеснёте', 5),
  plural3rdPerson: Word('плеснут', 5),
  masculinePast: Word('плеснул', 5),
  femininePast: Word('плеснула', 5),
  neuterPast: Word('плеснуло', 5),
  pluralPast: Word('плеснули', 5),
  imperativeInformal: Word('плесни', 5),
  imperativeFormal: Word('плесните', 5),
  imperfect: ['плескать'],
};

perfectVerbs.set(плеснуть.name.text, плеснуть);

export { плеснуть };