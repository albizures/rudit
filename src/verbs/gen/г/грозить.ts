import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грозить: PerfectVerb = {
  name: Word('грозить', 4),
  singular1stPerson: Word('грожу', 4),
  singular2ndPerson: Word('грозишь', 4),
  singular3rdPerson: Word('грозит', 4),
  plural1stPerson: Word('грозим', 4),
  plural2ndPerson: Word('грозите', 4),
  plural3rdPerson: Word('грозят', 4),
  masculinePast: Word('грозил', 4),
  femininePast: Word('грозила', 4),
  neuterPast: Word('грозило', 4),
  pluralPast: Word('грозили', 4),
  imperativeInformal: Word('грози', 4),
  imperativeFormal: Word('грозите', 4),
  imperfect: ['погрозить','пригрозить'],
};

perfectVerbs.set(грозить.name.text, грозить);

export { грозить };