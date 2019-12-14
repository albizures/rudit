import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрузить: PerfectVerb = {
  name: Word('погрузить', 6),
  singular1stPerson: Word('погружу', 6),
  singular2ndPerson: Word('погрузишь', 4),
  singular3rdPerson: Word('погрузит', 4),
  plural1stPerson: Word('погрузим', 4),
  plural2ndPerson: Word('погрузите', 4),
  plural3rdPerson: Word('погрузят', 4),
  masculinePast: Word('погрузил', 6),
  femininePast: Word('погрузила', 6),
  neuterPast: Word('погрузило', 6),
  pluralPast: Word('погрузили', 6),
  imperativeInformal: Word('погрузи', 6),
  imperativeFormal: Word('погрузите', 6),
  imperfect: ['грузить'],
};

perfectVerbs.set(погрузить.name.text, погрузить);

export { погрузить };