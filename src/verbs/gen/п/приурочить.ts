import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приурочить: PerfectVerb = {
  name: Word('приурочить', 5),
  singular1stPerson: Word('приурочу', 5),
  singular2ndPerson: Word('приурочишь', 5),
  singular3rdPerson: Word('приурочит', 5),
  plural1stPerson: Word('приурочим', 5),
  plural2ndPerson: Word('приурочите', 5),
  plural3rdPerson: Word('приурочат', 5),
  masculinePast: Word('приурочил', 5),
  femininePast: Word('приурочила', 5),
  neuterPast: Word('приурочило', 5),
  pluralPast: Word('приурочили', 5),
  imperativeInformal: Word('приурочь', 5),
  imperativeFormal: Word('приурочьте', 5),
  imperfect: [],
};

perfectVerbs.set(приурочить.name.text, приурочить);

export { приурочить };