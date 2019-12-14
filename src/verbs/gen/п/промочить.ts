import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промочить: PerfectVerb = {
  name: Word('промочить', 6),
  singular1stPerson: Word('промочу', 6),
  singular2ndPerson: Word('промочишь', 4),
  singular3rdPerson: Word('промочит', 4),
  plural1stPerson: Word('промочим', 4),
  plural2ndPerson: Word('промочите', 4),
  plural3rdPerson: Word('промочат', 4),
  masculinePast: Word('промочил', 6),
  femininePast: Word('промочила', 6),
  neuterPast: Word('промочило', 6),
  pluralPast: Word('промочили', 6),
  imperativeInformal: Word('промочи', 6),
  imperativeFormal: Word('промочите', 6),
  imperfect: [],
};

perfectVerbs.set(промочить.name.text, промочить);

export { промочить };