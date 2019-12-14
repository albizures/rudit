import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усвоить: PerfectVerb = {
  name: Word('усвоить', 3),
  singular1stPerson: Word('усвою', 3),
  singular2ndPerson: Word('усвоишь', 3),
  singular3rdPerson: Word('усвоит', 3),
  plural1stPerson: Word('усвоим', 3),
  plural2ndPerson: Word('усвоите', 3),
  plural3rdPerson: Word('усвоят', 3),
  masculinePast: Word('усвоил', 3),
  femininePast: Word('усвоила', 3),
  neuterPast: Word('усвоило', 3),
  pluralPast: Word('усвоили', 3),
  imperativeInformal: Word('усвой', 3),
  imperativeFormal: Word('усвойте', 3),
  imperfect: ['усваивать'],
};

perfectVerbs.set(усвоить.name.text, усвоить);

export { усвоить };