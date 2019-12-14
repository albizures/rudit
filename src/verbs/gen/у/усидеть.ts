import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усидеть: PerfectVerb = {
  name: Word('усидеть', 4),
  singular1stPerson: Word('усижу', 4),
  singular2ndPerson: Word('усидишь', 4),
  singular3rdPerson: Word('усидит', 4),
  plural1stPerson: Word('усидим', 4),
  plural2ndPerson: Word('усидите', 4),
  plural3rdPerson: Word('усидят', 4),
  masculinePast: Word('усидел', 4),
  femininePast: Word('усидела', 4),
  neuterPast: Word('усидело', 4),
  pluralPast: Word('усидели', 4),
  imperativeInformal: Word('усиди', 4),
  imperativeFormal: Word('усидите', 4),
  imperfect: [],
};

perfectVerbs.set(усидеть.name.text, усидеть);

export { усидеть };