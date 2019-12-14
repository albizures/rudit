import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const будить: PerfectVerb = {
  name: Word('будить', 3),
  singular1stPerson: Word('бужу', 3),
  singular2ndPerson: Word('будишь', 1),
  singular3rdPerson: Word('будит', 1),
  plural1stPerson: Word('будим', 1),
  plural2ndPerson: Word('будите', 1),
  plural3rdPerson: Word('будят', 1),
  masculinePast: Word('будил', 3),
  femininePast: Word('будила', 3),
  neuterPast: Word('будило', 3),
  pluralPast: Word('будили', 3),
  imperativeInformal: Word('буди', 3),
  imperativeFormal: Word('будите', 3),
  imperfect: ['разбудить','пробудить'],
};

perfectVerbs.set(будить.name.text, будить);

export { будить };