import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const льстить: PerfectVerb = {
  name: Word('льстить', 4),
  singular1stPerson: Word('льщу', 3),
  singular2ndPerson: Word('льстишь', 4),
  singular3rdPerson: Word('льстит', 4),
  plural1stPerson: Word('льстим', 4),
  plural2ndPerson: Word('льстите', 4),
  plural3rdPerson: Word('льстят', 4),
  masculinePast: Word('льстил', 4),
  femininePast: Word('льстила', 4),
  neuterPast: Word('льстило', 4),
  pluralPast: Word('льстили', 4),
  imperativeInformal: Word('льсти', 4),
  imperativeFormal: Word('льстите', 4),
  imperfect: [],
};

perfectVerbs.set(льстить.name.text, льстить);

export { льстить };