import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разозлить: PerfectVerb = {
  name: Word('разозлить', 6),
  singular1stPerson: Word('разозлю', 6),
  singular2ndPerson: Word('разозлишь', 6),
  singular3rdPerson: Word('разозлит', 6),
  plural1stPerson: Word('разозлим', 6),
  plural2ndPerson: Word('разозлите', 6),
  plural3rdPerson: Word('разозлят', 6),
  masculinePast: Word('разозлил', 6),
  femininePast: Word('разозлила', 6),
  neuterPast: Word('разозлило', 6),
  pluralPast: Word('разозлили', 6),
  imperativeInformal: Word('разозли', 6),
  imperativeFormal: Word('разозлите', 6),
  imperfect: [],
};

perfectVerbs.set(разозлить.name.text, разозлить);

export { разозлить };