import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приторочить: PerfectVerb = {
  name: Word('приторочить', 8),
  singular1stPerson: Word('приторочу', 8),
  singular2ndPerson: Word('приторочишь', 8),
  singular3rdPerson: Word('приторочит', 8),
  plural1stPerson: Word('приторочим', 8),
  plural2ndPerson: Word('приторочите', 8),
  plural3rdPerson: Word('приторочат', 8),
  masculinePast: Word('приторочил', 8),
  femininePast: Word('приторочила', 8),
  neuterPast: Word('приторочило', 8),
  pluralPast: Word('приторочили', 8),
  imperativeInformal: Word('приторочи', 8),
  imperativeFormal: Word('приторочите', 8),
  imperfect: [],
};

perfectVerbs.set(приторочить.name.text, приторочить);

export { приторочить };