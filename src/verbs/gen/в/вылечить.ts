import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылечить: PerfectVerb = {
  name: Word('вылечить', 1),
  singular1stPerson: Word('вылечу', 1),
  singular2ndPerson: Word('вылечишь', 1),
  singular3rdPerson: Word('вылечит', 1),
  plural1stPerson: Word('вылечим', 1),
  plural2ndPerson: Word('вылечите', 1),
  plural3rdPerson: Word('вылечат', 1),
  masculinePast: Word('вылечил', 1),
  femininePast: Word('вылечила', 1),
  neuterPast: Word('вылечило', 1),
  pluralPast: Word('вылечили', 1),
  imperativeInformal: Word('вылечи', 1),
  imperativeFormal: Word('вылечите', 1),
  imperfect: [],
};

perfectVerbs.set(вылечить.name.text, вылечить);

export { вылечить };