import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испустить: PerfectVerb = {
  name: Word('испустить', 6),
  singular1stPerson: Word('испущу', 5),
  singular2ndPerson: Word('испустишь', 3),
  singular3rdPerson: Word('испустит', 3),
  plural1stPerson: Word('испустим', 3),
  plural2ndPerson: Word('испустите', 3),
  plural3rdPerson: Word('испустят', 3),
  masculinePast: Word('испустил', 6),
  femininePast: Word('испустила', 6),
  neuterPast: Word('испустило', 6),
  pluralPast: Word('испустили', 6),
  imperativeInformal: Word('испусти', 6),
  imperativeFormal: Word('испустите', 6),
  imperfect: [],
};

perfectVerbs.set(испустить.name.text, испустить);

export { испустить };