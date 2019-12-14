import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const метить: PerfectVerb = {
  name: Word('метить', 1),
  singular1stPerson: Word('мечу', 1),
  singular2ndPerson: Word('метишь', 1),
  singular3rdPerson: Word('метит', 1),
  plural1stPerson: Word('метим', 1),
  plural2ndPerson: Word('метите', 1),
  plural3rdPerson: Word('метят', 1),
  masculinePast: Word('метил', 1),
  femininePast: Word('метила', 1),
  neuterPast: Word('метило', 1),
  pluralPast: Word('метили', 1),
  imperativeInformal: Word('меть', 1),
  imperativeFormal: Word('метьте', 1),
  imperfect: ['пометить'],
};

perfectVerbs.set(метить.name.text, метить);

export { метить };