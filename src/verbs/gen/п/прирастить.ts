import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирастить: PerfectVerb = {
  name: Word('прирастить', 7),
  singular1stPerson: Word('приращу', 6),
  singular2ndPerson: Word('прирастишь', 7),
  singular3rdPerson: Word('прирастит', 7),
  plural1stPerson: Word('прирастим', 7),
  plural2ndPerson: Word('прирастите', 7),
  plural3rdPerson: Word('прирастят', 7),
  masculinePast: Word('прирастил', 7),
  femininePast: Word('прирастила', 7),
  neuterPast: Word('прирастило', 7),
  pluralPast: Word('прирастили', 7),
  imperativeInformal: Word('прирасти', 7),
  imperativeFormal: Word('прирастите', 7),
  imperfect: [],
};

perfectVerbs.set(прирастить.name.text, прирастить);

export { прирастить };