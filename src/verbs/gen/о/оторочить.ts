import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оторочить: PerfectVerb = {
  name: Word('оторочить', 6),
  singular1stPerson: Word('оторочу', 6),
  singular2ndPerson: Word('оторочишь', 6),
  singular3rdPerson: Word('оторочит', 6),
  plural1stPerson: Word('оторочим', 6),
  plural2ndPerson: Word('оторочите', 6),
  plural3rdPerson: Word('оторочат', 6),
  masculinePast: Word('оторочил', 6),
  femininePast: Word('оторочила', 6),
  neuterPast: Word('оторочило', 6),
  pluralPast: Word('оторочили', 6),
  imperativeInformal: Word('оторочи', 6),
  imperativeFormal: Word('оторочите', 6),
  imperfect: [],
};

perfectVerbs.set(оторочить.name.text, оторочить);

export { оторочить };