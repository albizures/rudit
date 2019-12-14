import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепеть: PerfectVerb = {
  name: Word('перепеть', 5),
  singular1stPerson: Word('перепою', 6),
  singular2ndPerson: Word('перепоёшь', 1),
  singular3rdPerson: Word('перепоёт', 1),
  plural1stPerson: Word('перепоём', 1),
  plural2ndPerson: Word('перепоёте', 1),
  plural3rdPerson: Word('перепоют', 6),
  masculinePast: Word('перепел', 5),
  femininePast: Word('перепела', 5),
  neuterPast: Word('перепело', 5),
  pluralPast: Word('перепели', 5),
  imperativeInformal: Word('перепой', 5),
  imperativeFormal: Word('перепойте', 5),
  imperfect: [],
};

perfectVerbs.set(перепеть.name.text, перепеть);

export { перепеть };