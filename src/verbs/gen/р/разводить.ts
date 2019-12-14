import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разводить: PerfectVerb = {
  name: Word('разводить', 6),
  singular1stPerson: Word('развожу', 6),
  singular2ndPerson: Word('разводишь', 4),
  singular3rdPerson: Word('разводит', 4),
  plural1stPerson: Word('разводим', 4),
  plural2ndPerson: Word('разводите', 4),
  plural3rdPerson: Word('разводят', 4),
  masculinePast: Word('разводил', 6),
  femininePast: Word('разводила', 6),
  neuterPast: Word('разводило', 6),
  pluralPast: Word('разводили', 6),
  imperativeInformal: Word('разводи', 6),
  imperativeFormal: Word('разводите', 6),
  imperfect: ['развести'],
};

perfectVerbs.set(разводить.name.text, разводить);

export { разводить };