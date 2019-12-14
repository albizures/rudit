import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выходить: PerfectVerb = {
  name: Word('выходить', 1),
  singular1stPerson: Word('выхожу', 1),
  singular2ndPerson: Word('выходишь', 1),
  singular3rdPerson: Word('выходит', 1),
  plural1stPerson: Word('выходим', 1),
  plural2ndPerson: Word('выходите', 1),
  plural3rdPerson: Word('выходят', 1),
  masculinePast: Word('выходил', 1),
  femininePast: Word('выходила', 1),
  neuterPast: Word('выходило', 1),
  pluralPast: Word('выходили', 1),
  imperativeInformal: Word('выходи', 1),
  imperativeFormal: Word('выходите', 1),
  imperfect: [],
};

perfectVerbs.set(выходить.name.text, выходить);

export { выходить };