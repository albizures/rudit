import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ходить: PerfectVerb = {
  name: Word('ходить', 3),
  singular1stPerson: Word('хожу', 3),
  singular2ndPerson: Word('ходишь', 1),
  singular3rdPerson: Word('ходит', 1),
  plural1stPerson: Word('ходим', 1),
  plural2ndPerson: Word('ходите', 1),
  plural3rdPerson: Word('ходят', 1),
  masculinePast: Word('ходил', 3),
  femininePast: Word('ходила', 3),
  neuterPast: Word('ходило', 3),
  pluralPast: Word('ходили', 3),
  imperativeInformal: Word('ходи', 3),
  imperativeFormal: Word('ходите', 3),
  imperfect: ['походить'],
};

perfectVerbs.set(ходить.name.text, ходить);

export { ходить };