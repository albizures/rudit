import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преувеличить: PerfectVerb = {
  name: Word('преувеличить', 7),
  singular1stPerson: Word('преувеличу', 7),
  singular2ndPerson: Word('преувеличишь', 7),
  singular3rdPerson: Word('преувеличит', 7),
  plural1stPerson: Word('преувеличим', 7),
  plural2ndPerson: Word('преувеличите', 7),
  plural3rdPerson: Word('преувеличат', 7),
  masculinePast: Word('преувеличил', 7),
  femininePast: Word('преувеличила', 7),
  neuterPast: Word('преувеличило', 7),
  pluralPast: Word('преувеличили', 7),
  imperativeInformal: Word('преувеличь', 7),
  imperativeFormal: Word('преувеличьте', 7),
  imperfect: [],
};

perfectVerbs.set(преувеличить.name.text, преувеличить);

export { преувеличить };