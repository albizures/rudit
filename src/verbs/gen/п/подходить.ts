import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подходить: PerfectVerb = {
  name: Word('подходить', 6),
  singular1stPerson: Word('подхожу', 6),
  singular2ndPerson: Word('подходишь', 4),
  singular3rdPerson: Word('подходит', 4),
  plural1stPerson: Word('подходим', 4),
  plural2ndPerson: Word('подходите', 4),
  plural3rdPerson: Word('подходят', 4),
  masculinePast: Word('подходил', 6),
  femininePast: Word('подходила', 6),
  neuterPast: Word('подходило', 6),
  pluralPast: Word('подходили', 6),
  imperativeInformal: Word('подходи', 6),
  imperativeFormal: Word('подходите', 6),
  imperfect: ['подойти'],
};

perfectVerbs.set(подходить.name.text, подходить);

export { подходить };