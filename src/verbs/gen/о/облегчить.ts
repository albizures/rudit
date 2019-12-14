import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облегчить: PerfectVerb = {
  name: Word('облегчить', 6),
  singular1stPerson: Word('облегчу', 6),
  singular2ndPerson: Word('облегчишь', 6),
  singular3rdPerson: Word('облегчит', 6),
  plural1stPerson: Word('облегчим', 6),
  plural2ndPerson: Word('облегчите', 6),
  plural3rdPerson: Word('облегчат', 6),
  masculinePast: Word('облегчил', 6),
  femininePast: Word('облегчила', 6),
  neuterPast: Word('облегчило', 6),
  pluralPast: Word('облегчили', 6),
  imperativeInformal: Word('облегчи', 6),
  imperativeFormal: Word('облегчите', 6),
  imperfect: [],
};

perfectVerbs.set(облегчить.name.text, облегчить);

export { облегчить };