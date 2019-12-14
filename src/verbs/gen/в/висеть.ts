import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const висеть: PerfectVerb = {
  name: Word('висеть', 3),
  singular1stPerson: Word('вишу', 3),
  singular2ndPerson: Word('висишь', 3),
  singular3rdPerson: Word('висит', 3),
  plural1stPerson: Word('висим', 3),
  plural2ndPerson: Word('висите', 3),
  plural3rdPerson: Word('висят', 3),
  masculinePast: Word('висел', 3),
  femininePast: Word('висела', 3),
  neuterPast: Word('висело', 3),
  pluralPast: Word('висели', 3),
  imperativeInformal: Word('виси', 3),
  imperativeFormal: Word('висите', 3),
  imperfect: ['повисеть'],
};

perfectVerbs.set(висеть.name.text, висеть);

export { висеть };