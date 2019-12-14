import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остервенеть: PerfectVerb = {
  name: Word('остервенеть', 8),
  singular1stPerson: Word('остервенею', 8),
  singular2ndPerson: Word('остервенеешь', 8),
  singular3rdPerson: Word('остервенеет', 8),
  plural1stPerson: Word('остервенеем', 8),
  plural2ndPerson: Word('остервенеете', 8),
  plural3rdPerson: Word('остервенеют', 8),
  masculinePast: Word('остервенел', 8),
  femininePast: Word('остервенела', 8),
  neuterPast: Word('остервенело', 8),
  pluralPast: Word('остервенели', 8),
  imperativeInformal: Word('остервеней', 8),
  imperativeFormal: Word('остервенейте', 8),
  imperfect: [],
};

perfectVerbs.set(остервенеть.name.text, остервенеть);

export { остервенеть };