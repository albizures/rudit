import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрипеть: PerfectVerb = {
  name: Word('скрипеть', 5),
  singular1stPerson: Word('скриплю', 6),
  singular2ndPerson: Word('скрипишь', 5),
  singular3rdPerson: Word('скрипит', 5),
  plural1stPerson: Word('скрипим', 5),
  plural2ndPerson: Word('скрипите', 5),
  plural3rdPerson: Word('скрипят', 5),
  masculinePast: Word('скрипел', 5),
  femininePast: Word('скрипела', 5),
  neuterPast: Word('скрипело', 5),
  pluralPast: Word('скрипели', 5),
  imperativeInformal: Word('скрипи', 5),
  imperativeFormal: Word('скрипите', 5),
  imperfect: ['скрипнуть'],
};

perfectVerbs.set(скрипеть.name.text, скрипеть);

export { скрипеть };