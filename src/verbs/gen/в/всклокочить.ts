import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всклокочить: PerfectVerb = {
  name: Word('всклокочить', 6),
  singular1stPerson: Word('всклокочу', 6),
  singular2ndPerson: Word('всклокочишь', 6),
  singular3rdPerson: Word('всклокочит', 6),
  plural1stPerson: Word('всклокочим', 6),
  plural2ndPerson: Word('всклокочите', 6),
  plural3rdPerson: Word('всклокочат', 6),
  masculinePast: Word('всклокочил', 6),
  femininePast: Word('всклокочила', 6),
  neuterPast: Word('всклокочило', 6),
  pluralPast: Word('всклокочили', 6),
  imperativeInformal: Word('всклокочь', 6),
  imperativeFormal: Word('всклокочьте', 6),
  imperfect: [],
};

perfectVerbs.set(всклокочить.name.text, всклокочить);

export { всклокочить };