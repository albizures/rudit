import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удвоить: PerfectVerb = {
  name: Word('удвоить', 3),
  singular1stPerson: Word('удвою', 3),
  singular2ndPerson: Word('удвоишь', 3),
  singular3rdPerson: Word('удвоит', 3),
  plural1stPerson: Word('удвоим', 3),
  plural2ndPerson: Word('удвоите', 3),
  plural3rdPerson: Word('удвоят', 3),
  masculinePast: Word('удвоил', 3),
  femininePast: Word('удвоила', 3),
  neuterPast: Word('удвоило', 3),
  pluralPast: Word('удвоили', 3),
  imperativeInformal: Word('удвой', 3),
  imperativeFormal: Word('удвойте', 3),
  imperfect: [],
};

perfectVerbs.set(удвоить.name.text, удвоить);

export { удвоить };