import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предъявить: PerfectVerb = {
  name: Word('предъявить', 7),
  singular1stPerson: Word('предъявлю', 8),
  singular2ndPerson: Word('предъявишь', 5),
  singular3rdPerson: Word('предъявит', 5),
  plural1stPerson: Word('предъявим', 5),
  plural2ndPerson: Word('предъявите', 5),
  plural3rdPerson: Word('предъявят', 5),
  masculinePast: Word('предъявил', 7),
  femininePast: Word('предъявила', 7),
  neuterPast: Word('предъявило', 7),
  pluralPast: Word('предъявили', 7),
  imperativeInformal: Word('предъяви', 7),
  imperativeFormal: Word('предъявите', 7),
  imperfect: ['предъявлять'],
};

perfectVerbs.set(предъявить.name.text, предъявить);

export { предъявить };