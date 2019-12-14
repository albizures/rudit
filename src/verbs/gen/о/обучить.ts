import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обучить: PerfectVerb = {
  name: Word('обучить', 4),
  singular1stPerson: Word('обучу', 4),
  singular2ndPerson: Word('обучишь', 2),
  singular3rdPerson: Word('обучит', 2),
  plural1stPerson: Word('обучим', 2),
  plural2ndPerson: Word('обучите', 2),
  plural3rdPerson: Word('обучат', 2),
  masculinePast: Word('обучил', 4),
  femininePast: Word('обучила', 4),
  neuterPast: Word('обучило', 4),
  pluralPast: Word('обучили', 4),
  imperativeInformal: Word('обучи', 4),
  imperativeFormal: Word('обучите', 4),
  imperfect: ['обучать','учить'],
};

perfectVerbs.set(обучить.name.text, обучить);

export { обучить };