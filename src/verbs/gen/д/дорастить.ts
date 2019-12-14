import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорастить: PerfectVerb = {
  name: Word('дорастить', 6),
  singular1stPerson: Word('доращу', 5),
  singular2ndPerson: Word('дорастишь', 6),
  singular3rdPerson: Word('дорастит', 6),
  plural1stPerson: Word('дорастим', 6),
  plural2ndPerson: Word('дорастите', 6),
  plural3rdPerson: Word('дорастят', 6),
  masculinePast: Word('дорастил', 6),
  femininePast: Word('дорастила', 6),
  neuterPast: Word('дорастило', 6),
  pluralPast: Word('дорастили', 6),
  imperativeInformal: Word('дорасти', 6),
  imperativeFormal: Word('дорастите', 6),
  imperfect: [],
};

perfectVerbs.set(дорастить.name.text, дорастить);

export { дорастить };