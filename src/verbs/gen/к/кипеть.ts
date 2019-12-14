import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кипеть: PerfectVerb = {
  name: Word('кипеть', 3),
  singular1stPerson: Word('киплю', 4),
  singular2ndPerson: Word('кипишь', 3),
  singular3rdPerson: Word('кипит', 3),
  plural1stPerson: Word('кипим', 3),
  plural2ndPerson: Word('кипите', 3),
  plural3rdPerson: Word('кипят', 3),
  masculinePast: Word('кипел', 3),
  femininePast: Word('кипела', 3),
  neuterPast: Word('кипело', 3),
  pluralPast: Word('кипели', 3),
  imperativeInformal: Word('кипи', 3),
  imperativeFormal: Word('кипите', 3),
  imperfect: ['закипеть'],
};

perfectVerbs.set(кипеть.name.text, кипеть);

export { кипеть };