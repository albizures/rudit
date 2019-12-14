import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хватить: PerfectVerb = {
  name: Word('хватить', 4),
  singular1stPerson: Word('хвачу', 4),
  singular2ndPerson: Word('хватишь', 2),
  singular3rdPerson: Word('хватит', 2),
  plural1stPerson: Word('хватим', 2),
  plural2ndPerson: Word('хватите', 2),
  plural3rdPerson: Word('хватят', 2),
  masculinePast: Word('хватил', 4),
  femininePast: Word('хватила', 4),
  neuterPast: Word('хватило', 4),
  pluralPast: Word('хватили', 4),
  imperativeInformal: Word('хвати', 4),
  imperativeFormal: Word('хватите', 4),
  imperfect: [],
};

perfectVerbs.set(хватить.name.text, хватить);

export { хватить };