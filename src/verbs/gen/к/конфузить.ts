import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конфузить: PerfectVerb = {
  name: Word('конфузить', 4),
  singular1stPerson: Word('конфужу', 4),
  singular2ndPerson: Word('конфузишь', 4),
  singular3rdPerson: Word('конфузит', 4),
  plural1stPerson: Word('конфузим', 4),
  plural2ndPerson: Word('конфузите', 4),
  plural3rdPerson: Word('конфузят', 4),
  masculinePast: Word('конфузил', 4),
  femininePast: Word('конфузила', 4),
  neuterPast: Word('конфузило', 4),
  pluralPast: Word('конфузили', 4),
  imperativeInformal: Word('конфузь', 4),
  imperativeFormal: Word('конфузьте', 4),
  imperfect: ['сконфузить'],
};

perfectVerbs.set(конфузить.name.text, конфузить);

export { конфузить };