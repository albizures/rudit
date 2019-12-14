import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впустить: PerfectVerb = {
  name: Word('впустить', 5),
  singular1stPerson: Word('впущу', 4),
  singular2ndPerson: Word('впустишь', 2),
  singular3rdPerson: Word('впустит', 2),
  plural1stPerson: Word('впустим', 2),
  plural2ndPerson: Word('впустите', 2),
  plural3rdPerson: Word('впустят', 2),
  masculinePast: Word('впустил', 5),
  femininePast: Word('впустила', 5),
  neuterPast: Word('впустило', 5),
  pluralPast: Word('впустили', 5),
  imperativeInformal: Word('впусти', 5),
  imperativeFormal: Word('впустите', 5),
  imperfect: [],
};

perfectVerbs.set(впустить.name.text, впустить);

export { впустить };