import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зародить: PerfectVerb = {
  name: Word('зародить', 5),
  singular1stPerson: Word('зарожу', 5),
  singular2ndPerson: Word('зародишь', 5),
  singular3rdPerson: Word('зародит', 5),
  plural1stPerson: Word('зародим', 5),
  plural2ndPerson: Word('зародите', 5),
  plural3rdPerson: Word('зародят', 5),
  masculinePast: Word('зародил', 5),
  femininePast: Word('зародила', 5),
  neuterPast: Word('зародило', 5),
  pluralPast: Word('зародили', 5),
  imperativeInformal: Word('зароди', 5),
  imperativeFormal: Word('зародите', 5),
  imperfect: [],
};

perfectVerbs.set(зародить.name.text, зародить);

export { зародить };