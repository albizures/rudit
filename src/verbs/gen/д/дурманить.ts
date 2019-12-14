import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дурманить: PerfectVerb = {
  name: Word('дурманить', 4),
  singular1stPerson: Word('дурманю', 4),
  singular2ndPerson: Word('дурманишь', 4),
  singular3rdPerson: Word('дурманит', 4),
  plural1stPerson: Word('дурманим', 4),
  plural2ndPerson: Word('дурманите', 4),
  plural3rdPerson: Word('дурманят', 4),
  masculinePast: Word('дурманил', 4),
  femininePast: Word('дурманила', 4),
  neuterPast: Word('дурманило', 4),
  pluralPast: Word('дурманили', 4),
  imperativeInformal: Word('дурмань', 4),
  imperativeFormal: Word('дурманьте', 4),
  imperfect: [],
};

perfectVerbs.set(дурманить.name.text, дурманить);

export { дурманить };