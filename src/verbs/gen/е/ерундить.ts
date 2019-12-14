import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ерундить: PerfectVerb = {
  name: Word('ерундить', 5),
  singular1stPerson: Word('ерунжу', 5),
  singular2ndPerson: Word('ерундишь', 5),
  singular3rdPerson: Word('ерундит', 5),
  plural1stPerson: Word('ерундим', 5),
  plural2ndPerson: Word('ерундите', 5),
  plural3rdPerson: Word('ерундят', 5),
  masculinePast: Word('ерундил', 5),
  femininePast: Word('ерундила', 5),
  neuterPast: Word('ерундило', 5),
  pluralPast: Word('ерундили', 5),
  imperativeInformal: Word('ерунди', 5),
  imperativeFormal: Word('ерундите', 5),
  imperfect: [],
};

perfectVerbs.set(ерундить.name.text, ерундить);

export { ерундить };