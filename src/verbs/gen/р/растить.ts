import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растить: PerfectVerb = {
  name: Word('растить', 4),
  singular1stPerson: Word('ращу', 3),
  singular2ndPerson: Word('растишь', 4),
  singular3rdPerson: Word('растит', 4),
  plural1stPerson: Word('растим', 4),
  plural2ndPerson: Word('растите', 4),
  plural3rdPerson: Word('растят', 4),
  masculinePast: Word('растил', 4),
  femininePast: Word('растила', 4),
  neuterPast: Word('растило', 4),
  pluralPast: Word('растили', 4),
  imperativeInformal: Word('расти', 4),
  imperativeFormal: Word('растите', 4),
  imperfect: ['вырастить'],
};

perfectVerbs.set(растить.name.text, растить);

export { растить };