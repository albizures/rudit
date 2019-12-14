import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорастить: PerfectVerb = {
  name: Word('прорастить', 7),
  singular1stPerson: Word('проращу', 6),
  singular2ndPerson: Word('прорастишь', 7),
  singular3rdPerson: Word('прорастит', 7),
  plural1stPerson: Word('прорастим', 7),
  plural2ndPerson: Word('прорастите', 7),
  plural3rdPerson: Word('прорастят', 7),
  masculinePast: Word('прорастил', 7),
  femininePast: Word('прорастила', 7),
  neuterPast: Word('прорастило', 7),
  pluralPast: Word('прорастили', 7),
  imperativeInformal: Word('прорасти', 7),
  imperativeFormal: Word('прорастите', 7),
  imperfect: [],
};

perfectVerbs.set(прорастить.name.text, прорастить);

export { прорастить };