import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашелестеть: PerfectVerb = {
  name: Word('зашелестеть', 8),
  singular1stPerson: Word('зашелещу', 7),
  singular2ndPerson: Word('зашелестишь', 8),
  singular3rdPerson: Word('зашелестит', 8),
  plural1stPerson: Word('зашелестим', 8),
  plural2ndPerson: Word('зашелестите', 8),
  plural3rdPerson: Word('зашелестят', 8),
  masculinePast: Word('зашелестел', 8),
  femininePast: Word('зашелестела', 8),
  neuterPast: Word('зашелестело', 8),
  pluralPast: Word('зашелестели', 8),
  imperativeInformal: Word('зашелести', 8),
  imperativeFormal: Word('зашелестите', 8),
  imperfect: [],
};

perfectVerbs.set(зашелестеть.name.text, зашелестеть);

export { зашелестеть };