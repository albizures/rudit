import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зеленеть: PerfectVerb = {
  name: Word('зеленеть', 5),
  singular1stPerson: Word('зеленею', 5),
  singular2ndPerson: Word('зеленеешь', 5),
  singular3rdPerson: Word('зеленеет', 5),
  plural1stPerson: Word('зеленеем', 5),
  plural2ndPerson: Word('зеленеете', 5),
  plural3rdPerson: Word('зеленеют', 5),
  masculinePast: Word('зеленел', 5),
  femininePast: Word('зеленела', 5),
  neuterPast: Word('зеленело', 5),
  pluralPast: Word('зеленели', 5),
  imperativeInformal: Word('зеленей', 5),
  imperativeFormal: Word('зеленейте', 5),
  imperfect: [],
};

perfectVerbs.set(зеленеть.name.text, зеленеть);

export { зеленеть };