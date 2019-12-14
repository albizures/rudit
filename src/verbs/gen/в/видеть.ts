import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const видеть: PerfectVerb = {
  name: Word('видеть', 1),
  singular1stPerson: Word('вижу', 1),
  singular2ndPerson: Word('видишь', 1),
  singular3rdPerson: Word('видит', 1),
  plural1stPerson: Word('видим', 1),
  plural2ndPerson: Word('видите', 1),
  plural3rdPerson: Word('видят', 1),
  masculinePast: Word('видел', 1),
  femininePast: Word('видела', 1),
  neuterPast: Word('видело', 1),
  pluralPast: Word('видели', 1),
  imperativeInformal: Word('видь', 1),
  imperativeFormal: Word('видьте', 1),
  imperfect: ['увидеть'],
};

perfectVerbs.set(видеть.name.text, видеть);

export { видеть };