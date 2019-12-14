import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const представить: PerfectVerb = {
  name: Word('представить', 6),
  singular1stPerson: Word('представлю', 6),
  singular2ndPerson: Word('представишь', 6),
  singular3rdPerson: Word('представит', 6),
  plural1stPerson: Word('представим', 6),
  plural2ndPerson: Word('представите', 6),
  plural3rdPerson: Word('представят', 6),
  masculinePast: Word('представил', 6),
  femininePast: Word('представила', 6),
  neuterPast: Word('представило', 6),
  pluralPast: Word('представили', 6),
  imperativeInformal: Word('представь', 6),
  imperativeFormal: Word('представьте', 6),
  imperfect: ['представлять'],
};

perfectVerbs.set(представить.name.text, представить);

export { представить };