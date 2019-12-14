import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмочить: PerfectVerb = {
  name: Word('подмочить', 6),
  singular1stPerson: Word('подмочу', 6),
  singular2ndPerson: Word('подмочишь', 4),
  singular3rdPerson: Word('подмочит', 4),
  plural1stPerson: Word('подмочим', 4),
  plural2ndPerson: Word('подмочите', 4),
  plural3rdPerson: Word('подмочат', 4),
  masculinePast: Word('подмочил', 6),
  femininePast: Word('подмочила', 6),
  neuterPast: Word('подмочило', 6),
  pluralPast: Word('подмочили', 6),
  imperativeInformal: Word('подмочи', 6),
  imperativeFormal: Word('подмочите', 6),
  imperfect: [],
};

perfectVerbs.set(подмочить.name.text, подмочить);

export { подмочить };