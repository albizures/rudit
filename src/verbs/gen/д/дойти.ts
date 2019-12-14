import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дойти: PerfectVerb = {
  name: Word('дойти', 4),
  singular1stPerson: Word('дойду', 4),
  singular2ndPerson: Word('дойдёшь', 4),
  singular3rdPerson: Word('дойдёт', 4),
  plural1stPerson: Word('дойдём', 4),
  plural2ndPerson: Word('дойдёте', 4),
  plural3rdPerson: Word('дойдут', 4),
  masculinePast: Word('дошёл', 3),
  femininePast: Word('дошла', 4),
  neuterPast: Word('дошло', 4),
  pluralPast: Word('дошли', 4),
  imperativeInformal: Word('дойди', 4),
  imperativeFormal: Word('дойдите', 4),
  imperfect: ['доходить'],
};

perfectVerbs.set(дойти.name.text, дойти);

export { дойти };