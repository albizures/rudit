import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проходить: PerfectVerb = {
  name: Word('проходить', 6),
  singular1stPerson: Word('прохожу', 6),
  singular2ndPerson: Word('проходишь', 4),
  singular3rdPerson: Word('проходит', 4),
  plural1stPerson: Word('проходим', 4),
  plural2ndPerson: Word('проходите', 4),
  plural3rdPerson: Word('проходят', 4),
  masculinePast: Word('проходил', 6),
  femininePast: Word('проходила', 6),
  neuterPast: Word('проходило', 6),
  pluralPast: Word('проходили', 6),
  imperativeInformal: Word('проходи', 6),
  imperativeFormal: Word('проходите', 6),
  imperfect: [],
};

perfectVerbs.set(проходить.name.text, проходить);

export { проходить };