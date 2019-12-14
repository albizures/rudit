import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уходить: PerfectVerb = {
  name: Word('уходить', 4),
  singular1stPerson: Word('ухожу', 4),
  singular2ndPerson: Word('уходишь', 2),
  singular3rdPerson: Word('уходит', 2),
  plural1stPerson: Word('уходим', 2),
  plural2ndPerson: Word('уходите', 2),
  plural3rdPerson: Word('уходят', 2),
  masculinePast: Word('уходил', 4),
  femininePast: Word('уходила', 4),
  neuterPast: Word('уходило', 4),
  pluralPast: Word('уходили', 4),
  imperativeInformal: Word('уходи', 4),
  imperativeFormal: Word('уходите', 4),
  imperfect: ['уйти'],
};

perfectVerbs.set(уходить.name.text, уходить);

export { уходить };