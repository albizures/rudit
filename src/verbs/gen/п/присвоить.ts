import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присвоить: PerfectVerb = {
  name: Word('присвоить', 5),
  singular1stPerson: Word('присвою', 5),
  singular2ndPerson: Word('присвоишь', 5),
  singular3rdPerson: Word('присвоит', 5),
  plural1stPerson: Word('присвоим', 5),
  plural2ndPerson: Word('присвоите', 5),
  plural3rdPerson: Word('присвоят', 5),
  masculinePast: Word('присвоил', 5),
  femininePast: Word('присвоила', 5),
  neuterPast: Word('присвоило', 5),
  pluralPast: Word('присвоили', 5),
  imperativeInformal: Word('присвой', 5),
  imperativeFormal: Word('присвойте', 5),
  imperfect: [],
};

perfectVerbs.set(присвоить.name.text, присвоить);

export { присвоить };