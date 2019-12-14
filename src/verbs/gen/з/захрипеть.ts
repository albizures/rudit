import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захрипеть: PerfectVerb = {
  name: Word('захрипеть', 6),
  singular1stPerson: Word('захриплю', 7),
  singular2ndPerson: Word('захрипишь', 6),
  singular3rdPerson: Word('захрипит', 6),
  plural1stPerson: Word('захрипим', 6),
  plural2ndPerson: Word('захрипите', 6),
  plural3rdPerson: Word('захрипят', 6),
  masculinePast: Word('захрипел', 6),
  femininePast: Word('захрипела', 6),
  neuterPast: Word('захрипело', 6),
  pluralPast: Word('захрипели', 6),
  imperativeInformal: Word('захрипи', 6),
  imperativeFormal: Word('захрипите', 6),
  imperfect: [],
};

perfectVerbs.set(захрипеть.name.text, захрипеть);

export { захрипеть };