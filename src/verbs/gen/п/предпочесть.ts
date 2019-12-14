import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предпочесть: PerfectVerb = {
  name: Word('предпочесть', 7),
  singular1stPerson: Word('предпочту', 8),
  singular2ndPerson: Word('предпочтёшь', 8),
  singular3rdPerson: Word('предпочтёт', 8),
  plural1stPerson: Word('предпочтём', 8),
  plural2ndPerson: Word('предпочтёте', 8),
  plural3rdPerson: Word('предпочтут', 8),
  masculinePast: Word('предпочёл', 7),
  femininePast: Word('предпочла', 8),
  neuterPast: Word('предпочло', 8),
  pluralPast: Word('предпочли', 8),
  imperativeInformal: Word('предпочти', 8),
  imperativeFormal: Word('предпочтите', 8),
  imperfect: ['предпочитать'],
};

perfectVerbs.set(предпочесть.name.text, предпочесть);

export { предпочесть };