import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазеленеть: PerfectVerb = {
  name: Word('зазеленеть', 7),
  singular1stPerson: Word('зазеленею', 7),
  singular2ndPerson: Word('зазеленеешь', 7),
  singular3rdPerson: Word('зазеленеет', 7),
  plural1stPerson: Word('зазеленеем', 7),
  plural2ndPerson: Word('зазеленеете', 7),
  plural3rdPerson: Word('зазеленеют', 7),
  masculinePast: Word('зазеленел', 7),
  femininePast: Word('зазеленела', 7),
  neuterPast: Word('зазеленело', 7),
  pluralPast: Word('зазеленели', 7),
  imperativeInformal: Word('зазеленей', 7),
  imperativeFormal: Word('зазеленейте', 7),
  imperfect: [],
};

perfectVerbs.set(зазеленеть.name.text, зазеленеть);

export { зазеленеть };