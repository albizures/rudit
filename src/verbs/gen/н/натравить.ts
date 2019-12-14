import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натравить: PerfectVerb = {
  name: Word('натравить', 6),
  singular1stPerson: Word('натравлю', 7),
  singular2ndPerson: Word('натравишь', 4),
  singular3rdPerson: Word('натравит', 4),
  plural1stPerson: Word('натравим', 4),
  plural2ndPerson: Word('натравите', 4),
  plural3rdPerson: Word('натравят', 4),
  masculinePast: Word('натравил', 6),
  femininePast: Word('натравила', 6),
  neuterPast: Word('натравило', 6),
  pluralPast: Word('натравили', 6),
  imperativeInformal: Word('натрави', 6),
  imperativeFormal: Word('натравите', 6),
  imperfect: [],
};

perfectVerbs.set(натравить.name.text, натравить);

export { натравить };