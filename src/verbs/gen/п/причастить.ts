import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причастить: PerfectVerb = {
  name: Word('причастить', 7),
  singular1stPerson: Word('причащу', 6),
  singular2ndPerson: Word('причастишь', 7),
  singular3rdPerson: Word('причастит', 7),
  plural1stPerson: Word('причастим', 7),
  plural2ndPerson: Word('причастите', 7),
  plural3rdPerson: Word('причастят', 7),
  masculinePast: Word('причастил', 7),
  femininePast: Word('причастила', 7),
  neuterPast: Word('причастило', 7),
  pluralPast: Word('причастили', 7),
  imperativeInformal: Word('причасти', 7),
  imperativeFormal: Word('причастите', 7),
  imperfect: [],
};

perfectVerbs.set(причастить.name.text, причастить);

export { причастить };