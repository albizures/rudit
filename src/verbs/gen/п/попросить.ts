import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попросить: PerfectVerb = {
  name: Word('попросить', 6),
  singular1stPerson: Word('попрошу', 6),
  singular2ndPerson: Word('попросишь', 4),
  singular3rdPerson: Word('попросит', 4),
  plural1stPerson: Word('попросим', 4),
  plural2ndPerson: Word('попросите', 4),
  plural3rdPerson: Word('попросят', 4),
  masculinePast: Word('попросил', 6),
  femininePast: Word('попросила', 6),
  neuterPast: Word('попросило', 6),
  pluralPast: Word('попросили', 6),
  imperativeInformal: Word('попроси', 6),
  imperativeFormal: Word('попросите', 6),
  imperfect: ['просить'],
};

perfectVerbs.set(попросить.name.text, попросить);

export { попросить };