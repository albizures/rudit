import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затвердить: PerfectVerb = {
  name: Word('затвердить', 7),
  singular1stPerson: Word('затвержу', 7),
  singular2ndPerson: Word('затвердишь', 7),
  singular3rdPerson: Word('затвердит', 7),
  plural1stPerson: Word('затвердим', 7),
  plural2ndPerson: Word('затвердите', 7),
  plural3rdPerson: Word('затвердят', 7),
  masculinePast: Word('затвердил', 7),
  femininePast: Word('затвердила', 7),
  neuterPast: Word('затвердило', 7),
  pluralPast: Word('затвердили', 7),
  imperativeInformal: Word('затверди', 7),
  imperativeFormal: Word('затвердите', 7),
  imperfect: [],
};

perfectVerbs.set(затвердить.name.text, затвердить);

export { затвердить };