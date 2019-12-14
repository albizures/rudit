import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заявить: PerfectVerb = {
  name: Word('заявить', 4),
  singular1stPerson: Word('заявлю', 5),
  singular2ndPerson: Word('заявишь', 2),
  singular3rdPerson: Word('заявит', 2),
  plural1stPerson: Word('заявим', 2),
  plural2ndPerson: Word('заявите', 2),
  plural3rdPerson: Word('заявят', 2),
  masculinePast: Word('заявил', 4),
  femininePast: Word('заявила', 4),
  neuterPast: Word('заявило', 4),
  pluralPast: Word('заявили', 4),
  imperativeInformal: Word('заяви', 4),
  imperativeFormal: Word('заявите', 4),
  imperfect: ['заявлять'],
};

perfectVerbs.set(заявить.name.text, заявить);

export { заявить };