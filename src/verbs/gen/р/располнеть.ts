import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const располнеть: PerfectVerb = {
  name: Word('располнеть', 7),
  singular1stPerson: Word('располнею', 7),
  singular2ndPerson: Word('располнеешь', 7),
  singular3rdPerson: Word('располнеет', 7),
  plural1stPerson: Word('располнеем', 7),
  plural2ndPerson: Word('располнеете', 7),
  plural3rdPerson: Word('располнеют', 7),
  masculinePast: Word('располнел', 7),
  femininePast: Word('располнела', 7),
  neuterPast: Word('располнело', 7),
  pluralPast: Word('располнели', 7),
  imperativeInformal: Word('располней', 7),
  imperativeFormal: Word('располнейте', 7),
  imperfect: [],
};

perfectVerbs.set(располнеть.name.text, располнеть);

export { располнеть };