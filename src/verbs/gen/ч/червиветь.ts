import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const червиветь: PerfectVerb = {
  name: Word('червиветь', 4),
  singular1stPerson: Word('червивею', 4),
  singular2ndPerson: Word('червивеешь', 4),
  singular3rdPerson: Word('червивеет', 4),
  plural1stPerson: Word('червивеем', 4),
  plural2ndPerson: Word('червивеете', 4),
  plural3rdPerson: Word('червивеют', 4),
  masculinePast: Word('червивел', 4),
  femininePast: Word('червивела', 4),
  neuterPast: Word('червивело', 4),
  pluralPast: Word('червивели', 4),
  imperativeInformal: Word('червивей', 4),
  imperativeFormal: Word('червивейте', 4),
  imperfect: [],
};

perfectVerbs.set(червиветь.name.text, червиветь);

export { червиветь };