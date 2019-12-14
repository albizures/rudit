import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всходить: PerfectVerb = {
  name: Word('всходить', 5),
  singular1stPerson: Word('всхожу', 5),
  singular2ndPerson: Word('всходишь', 3),
  singular3rdPerson: Word('всходит', 3),
  plural1stPerson: Word('всходим', 3),
  plural2ndPerson: Word('всходите', 3),
  plural3rdPerson: Word('всходят', 3),
  masculinePast: Word('всходил', 5),
  femininePast: Word('всходила', 5),
  neuterPast: Word('всходило', 5),
  pluralPast: Word('всходили', 5),
  imperativeInformal: Word('всходи', 5),
  imperativeFormal: Word('всходите', 5),
  imperfect: ['взойти'],
};

perfectVerbs.set(всходить.name.text, всходить);

export { всходить };