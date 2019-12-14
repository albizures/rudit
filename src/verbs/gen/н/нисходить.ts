import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нисходить: PerfectVerb = {
  name: Word('нисходить', 6),
  singular1stPerson: Word('нисхожу', 6),
  singular2ndPerson: Word('нисходишь', 4),
  singular3rdPerson: Word('нисходит', 4),
  plural1stPerson: Word('нисходим', 4),
  plural2ndPerson: Word('нисходите', 4),
  plural3rdPerson: Word('нисходят', 4),
  masculinePast: Word('нисходил', 6),
  femininePast: Word('нисходила', 6),
  neuterPast: Word('нисходило', 6),
  pluralPast: Word('нисходили', 6),
  imperativeInformal: Word('нисходи', 6),
  imperativeFormal: Word('нисходите', 6),
  imperfect: [],
};

perfectVerbs.set(нисходить.name.text, нисходить);

export { нисходить };