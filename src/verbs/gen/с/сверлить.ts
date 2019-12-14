import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверлить: PerfectVerb = {
  name: Word('сверлить', 5),
  singular1stPerson: Word('сверлю', 5),
  singular2ndPerson: Word('сверлишь', 2),
  singular3rdPerson: Word('сверлит', 2),
  plural1stPerson: Word('сверлим', 2),
  plural2ndPerson: Word('сверлите', 2),
  plural3rdPerson: Word('сверлят', 2),
  masculinePast: Word('сверлил', 5),
  femininePast: Word('сверлила', 5),
  neuterPast: Word('сверлило', 5),
  pluralPast: Word('сверлили', 5),
  imperativeInformal: Word('сверли', 5),
  imperativeFormal: Word('сверлите', 5),
  imperfect: ['просверлить'],
};

perfectVerbs.set(сверлить.name.text, сверлить);

export { сверлить };