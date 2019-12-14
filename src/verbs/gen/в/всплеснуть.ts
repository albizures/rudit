import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всплеснуть: PerfectVerb = {
  name: Word('всплеснуть', 7),
  singular1stPerson: Word('всплесну', 7),
  singular2ndPerson: Word('всплеснёшь', 7),
  singular3rdPerson: Word('всплеснёт', 7),
  plural1stPerson: Word('всплеснём', 7),
  plural2ndPerson: Word('всплеснёте', 7),
  plural3rdPerson: Word('всплеснут', 7),
  masculinePast: Word('всплеснул', 7),
  femininePast: Word('всплеснула', 7),
  neuterPast: Word('всплеснуло', 7),
  pluralPast: Word('всплеснули', 7),
  imperativeInformal: Word('всплесни', 7),
  imperativeFormal: Word('всплесните', 7),
  imperfect: [],
};

perfectVerbs.set(всплеснуть.name.text, всплеснуть);

export { всплеснуть };