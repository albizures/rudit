import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разить: PerfectVerb = {
  name: Word('разить', 3),
  singular1stPerson: Word('ражу', 3),
  singular2ndPerson: Word('разишь', 3),
  singular3rdPerson: Word('разит', 3),
  plural1stPerson: Word('разим', 3),
  plural2ndPerson: Word('разите', 3),
  plural3rdPerson: Word('разят', 3),
  masculinePast: Word('разил', 3),
  femininePast: Word('разила', 3),
  neuterPast: Word('разило', 3),
  pluralPast: Word('разили', 3),
  imperativeInformal: Word('рази', 3),
  imperativeFormal: Word('разите', 3),
  imperfect: ['сразить'],
};

perfectVerbs.set(разить.name.text, разить);

export { разить };