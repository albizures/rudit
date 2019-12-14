import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прельстить: PerfectVerb = {
  name: Word('прельстить', 7),
  singular1stPerson: Word('прельщу', 6),
  singular2ndPerson: Word('прельстишь', 7),
  singular3rdPerson: Word('прельстит', 7),
  plural1stPerson: Word('прельстим', 7),
  plural2ndPerson: Word('прельстите', 7),
  plural3rdPerson: Word('прельстят', 7),
  masculinePast: Word('прельстил', 7),
  femininePast: Word('прельстила', 7),
  neuterPast: Word('прельстило', 7),
  pluralPast: Word('прельстили', 7),
  imperativeInformal: Word('прельсти', 7),
  imperativeFormal: Word('прельстите', 7),
  imperfect: ['прельщать'],
};

perfectVerbs.set(прельстить.name.text, прельстить);

export { прельстить };