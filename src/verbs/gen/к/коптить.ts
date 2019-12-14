import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коптить: PerfectVerb = {
  name: Word('коптить', 4),
  singular1stPerson: Word('копчу', 4),
  singular2ndPerson: Word('коптишь', 4),
  singular3rdPerson: Word('коптит', 4),
  plural1stPerson: Word('коптим', 4),
  plural2ndPerson: Word('коптите', 4),
  plural3rdPerson: Word('коптят', 4),
  masculinePast: Word('коптил', 4),
  femininePast: Word('коптила', 4),
  neuterPast: Word('коптило', 4),
  pluralPast: Word('коптили', 4),
  imperativeInformal: Word('копти', 4),
  imperativeFormal: Word('коптите', 4),
  imperfect: ['закоптить'],
};

perfectVerbs.set(коптить.name.text, коптить);

export { коптить };