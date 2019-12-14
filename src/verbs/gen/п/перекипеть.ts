import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекипеть: PerfectVerb = {
  name: Word('перекипеть', 7),
  singular1stPerson: Word('перекиплю', 8),
  singular2ndPerson: Word('перекипишь', 7),
  singular3rdPerson: Word('перекипит', 7),
  plural1stPerson: Word('перекипим', 7),
  plural2ndPerson: Word('перекипите', 7),
  plural3rdPerson: Word('перекипят', 7),
  masculinePast: Word('перекипел', 7),
  femininePast: Word('перекипела', 7),
  neuterPast: Word('перекипело', 7),
  pluralPast: Word('перекипели', 7),
  imperativeInformal: Word('перекипи', 7),
  imperativeFormal: Word('перекипите', 7),
  imperfect: [],
};

perfectVerbs.set(перекипеть.name.text, перекипеть);

export { перекипеть };