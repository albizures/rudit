import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приходить: PerfectVerb = {
  name: Word('приходить', 6),
  singular1stPerson: Word('прихожу', 6),
  singular2ndPerson: Word('приходишь', 4),
  singular3rdPerson: Word('приходит', 4),
  plural1stPerson: Word('приходим', 4),
  plural2ndPerson: Word('приходите', 4),
  plural3rdPerson: Word('приходят', 4),
  masculinePast: Word('приходил', 6),
  femininePast: Word('приходила', 6),
  neuterPast: Word('приходило', 6),
  pluralPast: Word('приходили', 6),
  imperativeInformal: Word('приходи', 6),
  imperativeFormal: Word('приходите', 6),
  imperfect: ['прийти'],
};

perfectVerbs.set(приходить.name.text, приходить);

export { приходить };