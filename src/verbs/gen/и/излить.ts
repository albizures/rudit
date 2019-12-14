import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излить: PerfectVerb = {
  name: Word('излить', 3),
  singular1stPerson: Word('изолью', 5),
  singular2ndPerson: Word('изольёшь', 0),
  singular3rdPerson: Word('изольёт', 0),
  plural1stPerson: Word('изольём', 0),
  plural2ndPerson: Word('изольёте', 7),
  plural3rdPerson: Word('изольют', 5),
  masculinePast: Word('излил', 3),
  femininePast: Word('излила', 5),
  neuterPast: Word('излило', 3),
  pluralPast: Word('излили', 3),
  imperativeInformal: Word('излей', 3),
  imperativeFormal: Word('излейте', 3),
  imperfect: [],
};

perfectVerbs.set(излить.name.text, излить);

export { излить };