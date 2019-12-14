import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const происходить: PerfectVerb = {
  name: Word('происходить', 8),
  singular1stPerson: Word('происхожу', 8),
  singular2ndPerson: Word('происходишь', 6),
  singular3rdPerson: Word('происходит', 6),
  plural1stPerson: Word('происходим', 6),
  plural2ndPerson: Word('происходите', 6),
  plural3rdPerson: Word('происходят', 6),
  masculinePast: Word('происходил', 8),
  femininePast: Word('происходила', 8),
  neuterPast: Word('происходило', 8),
  pluralPast: Word('происходили', 8),
  imperativeInformal: Word('происходи', 8),
  imperativeFormal: Word('происходите', 8),
  imperfect: ['произойти'],
};

perfectVerbs.set(происходить.name.text, происходить);

export { происходить };