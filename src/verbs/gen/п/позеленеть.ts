import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позеленеть: PerfectVerb = {
  name: Word('позеленеть', 7),
  singular1stPerson: Word('позеленею', 7),
  singular2ndPerson: Word('позеленеешь', 7),
  singular3rdPerson: Word('позеленеет', 7),
  plural1stPerson: Word('позеленеем', 7),
  plural2ndPerson: Word('позеленеете', 7),
  plural3rdPerson: Word('позеленеют', 7),
  masculinePast: Word('позеленел', 7),
  femininePast: Word('позеленела', 7),
  neuterPast: Word('позеленело', 7),
  pluralPast: Word('позеленели', 7),
  imperativeInformal: Word('позеленей', 7),
  imperativeFormal: Word('позеленейте', 7),
  imperfect: [],
};

perfectVerbs.set(позеленеть.name.text, позеленеть);

export { позеленеть };