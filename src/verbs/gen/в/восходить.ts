import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восходить: PerfectVerb = {
  name: Word('восходить', 6),
  singular1stPerson: Word('восхожу', 6),
  singular2ndPerson: Word('восходишь', 4),
  singular3rdPerson: Word('восходит', 4),
  plural1stPerson: Word('восходим', 4),
  plural2ndPerson: Word('восходите', 4),
  plural3rdPerson: Word('восходят', 4),
  masculinePast: Word('восходил', 6),
  femininePast: Word('восходила', 6),
  neuterPast: Word('восходило', 6),
  pluralPast: Word('восходили', 6),
  imperativeInformal: Word('восходи', 6),
  imperativeFormal: Word('восходите', 6),
  imperfect: [],
};

perfectVerbs.set(восходить.name.text, восходить);

export { восходить };