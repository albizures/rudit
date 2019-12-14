import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const твердить: PerfectVerb = {
  name: Word('твердить', 5),
  singular1stPerson: Word('твержу', 5),
  singular2ndPerson: Word('твердишь', 5),
  singular3rdPerson: Word('твердит', 5),
  plural1stPerson: Word('твердим', 5),
  plural2ndPerson: Word('твердите', 5),
  plural3rdPerson: Word('твердят', 5),
  masculinePast: Word('твердил', 5),
  femininePast: Word('твердила', 5),
  neuterPast: Word('твердило', 5),
  pluralPast: Word('твердили', 5),
  imperativeInformal: Word('тверди', 5),
  imperativeFormal: Word('твердите', 5),
  imperfect: [],
};

perfectVerbs.set(твердить.name.text, твердить);

export { твердить };