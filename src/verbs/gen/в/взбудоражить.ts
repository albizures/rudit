import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбудоражить: PerfectVerb = {
  name: Word('взбудоражить', 9),
  singular1stPerson: Word('взбудоражу', 7),
  singular2ndPerson: Word('взбудоражишь', 7),
  singular3rdPerson: Word('взбудоражит', 7),
  plural1stPerson: Word('взбудоражим', 7),
  plural2ndPerson: Word('взбудоражите', 7),
  plural3rdPerson: Word('взбудоражат', 7),
  masculinePast: Word('взбудоражил', 9),
  femininePast: Word('взбудоражила', 9),
  neuterPast: Word('взбудоражило', 9),
  pluralPast: Word('взбудоражили', 9),
  imperativeInformal: Word('взбудоражь', 7),
  imperativeFormal: Word('взбудоражьте', 7),
  imperfect: [],
};

perfectVerbs.set(взбудоражить.name.text, взбудоражить);

export { взбудоражить };