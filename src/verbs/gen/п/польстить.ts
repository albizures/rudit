import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const польстить: PerfectVerb = {
  name: Word('польстить', 6),
  singular1stPerson: Word('польщу', 5),
  singular2ndPerson: Word('польстишь', 6),
  singular3rdPerson: Word('польстит', 6),
  plural1stPerson: Word('польстим', 6),
  plural2ndPerson: Word('польстите', 6),
  plural3rdPerson: Word('польстят', 6),
  masculinePast: Word('польстил', 6),
  femininePast: Word('польстила', 6),
  neuterPast: Word('польстило', 6),
  pluralPast: Word('польстили', 6),
  imperativeInformal: Word('польсти', 6),
  imperativeFormal: Word('польстите', 6),
  imperfect: [],
};

perfectVerbs.set(польстить.name.text, польстить);

export { польстить };