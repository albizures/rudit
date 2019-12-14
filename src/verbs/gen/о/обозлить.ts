import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозлить: PerfectVerb = {
  name: Word('обозлить', 5),
  singular1stPerson: Word('обозлю', 5),
  singular2ndPerson: Word('обозлишь', 5),
  singular3rdPerson: Word('обозлит', 5),
  plural1stPerson: Word('обозлим', 5),
  plural2ndPerson: Word('обозлите', 5),
  plural3rdPerson: Word('обозлят', 5),
  masculinePast: Word('обозлил', 5),
  femininePast: Word('обозлила', 5),
  neuterPast: Word('обозлило', 5),
  pluralPast: Word('обозлили', 5),
  imperativeInformal: Word('обозли', 5),
  imperativeFormal: Word('обозлите', 5),
  imperfect: [],
};

perfectVerbs.set(обозлить.name.text, обозлить);

export { обозлить };